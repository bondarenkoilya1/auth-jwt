import { getUser, type UserResponseType } from "@/modules/User/logic/userMethods.js";
import { RESPONSE_SUCCESS } from "@/constants/index.js";
import { useState, useCallback } from "react";

export const useGetUser = () => {
  const [user, setUser] = useState<UserResponseType["data"] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onGetUser = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getUser();

      if (response?.status === RESPONSE_SUCCESS) {
        setUser(response.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch user"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { onGetUser, user, isLoading, error };
};
