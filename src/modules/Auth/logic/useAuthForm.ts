import { useForm } from "react-hook-form";
import { authSchema, type AuthValues, register } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthActions } from "@/app/store/useAuthStore.ts";
import { useState } from "react";
import { RESPONSE_SUCCESS } from "@/constants/index.js";

export const useAuthForm = () => {
  const formMethods = useForm<AuthValues>({
    resolver: zodResolver(authSchema)
  });
  const { login } = useAuthActions();
  const [isVerificationRequested, setIsVerificationRequested] = useState(false);

  const onLogin = (values: AuthValues) => {
    const { email, password } = values;
    login(email, password);
  };

  const onRegister = async (values: AuthValues) => {
    const { username, email, password } = values;
    const response = await register(username, email, password);

    if (response.status === RESPONSE_SUCCESS) setIsVerificationRequested(true);
  };

  return {
    onLogin: formMethods.handleSubmit(onLogin),
    onRegister: formMethods.handleSubmit(onRegister),
    isVerificationRequested,
    ...formMethods
  };
};
