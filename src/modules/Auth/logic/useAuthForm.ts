import { useForm } from "react-hook-form";
import { authSchema, type AuthValues } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthActions } from "@/app/store/useAuthStore.ts";

export const useAuthForm = () => {
  const formMethods = useForm<AuthValues>({
    resolver: zodResolver(authSchema)
  });
  const { login, register } = useAuthActions();

  const onSubmit = (values: AuthValues) => {
    console.log(values);
  };

  const onLogin = (values: AuthValues) => {
    const { email, password } = values;
    login(email, password);
  };

  const onRegister = (values: AuthValues) => {
    const { email, password } = values;
    register(email, password);
  };

  return {
    onSubmit: formMethods.handleSubmit(onSubmit),
    onLogin: formMethods.handleSubmit(onLogin),
    onRegister: formMethods.handleSubmit(onRegister),
    ...formMethods
  };
};
