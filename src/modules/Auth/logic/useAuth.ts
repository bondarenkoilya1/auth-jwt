import { useForm } from "react-hook-form";
import { authSchema, type AuthValues } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";

export const useAuth = () => {
  const { handleSubmit, register } = useForm<AuthValues>({
    resolver: zodResolver(authSchema)
  });

  const onSubmit = (values: AuthValues) => {
    console.log(values);
  };

  return { onSubmit: handleSubmit(onSubmit), register };
};
