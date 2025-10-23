import { useForm } from "react-hook-form";
import { login, loginSchema, type LoginValues } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { RESPONSE_SUCCESS } from "@/constants/index.js";
import { useAuthActions } from "@/app/store/useAuthStore.js";

export const useLogin = () => {
  const formMethods = useForm<LoginValues>({
    resolver: zodResolver(loginSchema)
  });
  const { setIsVerificationRequested } = useAuthActions();

  const onLogin = async (values: LoginValues) => {
    const { email, password } = values;

    try {
      const response = await login(email, password);

      if (response.status === RESPONSE_SUCCESS) {
        window.location.href = "/profile";
      }
    } catch (err) {
      if (err instanceof Response) {
        try {
          const errorBody = await err.json();

          if (errorBody?.status === "error" && errorBody?.Message === "user isn't confirmed") {
            setIsVerificationRequested(true);
            return;
          }

          console.error("❌ Other server error:", errorBody);
        } catch {
          console.error("❌ Failed to parse error JSON");
        }
      } else console.error("❌ Unexpected error:", err);
    }
  };

  return {
    onLogin: formMethods.handleSubmit(onLogin),
    ...formMethods
  };
};
