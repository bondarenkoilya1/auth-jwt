import { useForm } from "react-hook-form";
import { register, registerSchema, type RegisterValues } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { RESPONSE_SUCCESS } from "@/constants/index.js";
import { useAuthActions } from "@/app/store/useAuthStore.js";

export const useRegister = () => {
  const formMethods = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema)
  });
  const { setIsVerificationRequested } = useAuthActions();

  const onRegister = async (values: RegisterValues) => {
    const { username, email, password } = values;
    const response = await register(username, email, password);

    if (response.status === RESPONSE_SUCCESS) {
      setIsVerificationRequested(true);
      localStorage.setItem("emailConfirmationToken", response.data.token);
    }
  };

  return {
    onRegister: formMethods.handleSubmit(onRegister),
    ...formMethods
  };
};
