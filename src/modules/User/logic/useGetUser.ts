import { getUser, type UserResponseType } from "@/modules/User/logic/userMethods.js";
import { RESPONSE_SUCCESS } from "@/constants/index.js";
import { useState, useCallback } from "react";
import { refreshToken } from "@/modules/Auth/index.js";

const RESPONSE_UNAUTHORIZED = "not permitted";
const LOGIN_PATH = "/login";

export const useGetUser = () => {
  const [user, setUser] = useState<UserResponseType["data"] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const redirectToLogin = useCallback(() => {
    window.location.href = LOGIN_PATH;
  }, []);

  const refreshAuthToken = useCallback(async (): Promise<boolean> => {
    try {
      const response = await refreshToken();
      return response?.status === RESPONSE_SUCCESS;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return false;
    }
  }, []);

  const onGetUser = useCallback(
    async (isRetry = false): Promise<void> => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getUser();

        if (response?.status === RESPONSE_UNAUTHORIZED) {
          if (isRetry) {
            redirectToLogin();
            return;
          }

          const refreshed = await refreshAuthToken();

          if (refreshed) await onGetUser(true);
          else redirectToLogin();

          return;
        }

        if (response?.status === RESPONSE_SUCCESS) setUser(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch user"));
      } finally {
        setIsLoading(false);
      }
    },
    [refreshAuthToken, redirectToLogin]
  );

  return { onGetUser, user, isLoading, error };
};
