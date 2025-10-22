import { useForm } from "react-hook-form";
import { login, loginSchema, type LoginValues } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { RESPONSE_SUCCESS } from "@/constants/index.js";

export const useLogin = () => {
  const formMethods = useForm<LoginValues>({
    resolver: zodResolver(loginSchema)
  });

  const onLogin = async (values: LoginValues) => {
    const { email, password } = values;
    const response = await login(email, password);

    if (response.status === RESPONSE_SUCCESS) {
      // window.location.href = "/profile";
    }
    console.log(response);
  };

  return {
    onLogin: formMethods.handleSubmit(onLogin),
    ...formMethods
  };
};
