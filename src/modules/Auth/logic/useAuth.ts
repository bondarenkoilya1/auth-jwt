import { useForm } from "react-hook-form";
import { authSchema, type AuthValues, login, register } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { RESPONSE_SUCCESS } from "@/constants/index.js";

export const useAuth = () => {
  const formMethods = useForm<AuthValues>({
    resolver: zodResolver(authSchema)
  });
  const [isVerificationRequested, setIsVerificationRequested] = useState(false);

  const onLogin = async (values: AuthValues) => {
    const { email, password } = values;
    const response = await login(email, password);
    console.log(response);
  };

  const onRegister = async (values: AuthValues) => {
    const { username, email, password } = values;
    const response = await register(username, email, password);

    if (response.status === RESPONSE_SUCCESS) {
      setIsVerificationRequested(true);
      localStorage.setItem("emailConfirmationToken", response.data.token);
    }
  };

  return {
    onLogin: formMethods.handleSubmit(onLogin),
    onRegister: formMethods.handleSubmit(onRegister),
    isVerificationRequested,
    ...formMethods
  };
};
