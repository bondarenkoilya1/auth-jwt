import { useForm } from "react-hook-form";
import { authSchema, type AuthValues, register } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthActions } from "@/app/store/useAuthStore.ts";
import { useState } from "react";

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
    console.log(values);
    const response = await register(username, email, password);
    console.log(response);
    // setIsVerificationRequested(true); // do this only if response ok comes
  };

  return {
    onLogin: formMethods.handleSubmit(onLogin),
    onRegister: formMethods.handleSubmit(onRegister),
    isVerificationRequested,
    ...formMethods
  };
};
