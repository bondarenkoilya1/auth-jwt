import { useForm } from "react-hook-form";
import { verificationSchema, type VerificationValues } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useAuthActions } from "@/app/store/useAuthStore.ts";

export const useVerifyForm = () => {
  const formMethods = useForm<VerificationValues>({
    resolver: zodResolver(verificationSchema)
  });
  // const { verifyAndLogin } = useAuthActions();

  const onVerification = (values: VerificationValues) => {
    // const { code } = values;
    console.log(values);
    // if (code) verifyAndLogin(code);
  };

  return {
    onVerification: formMethods.handleSubmit(onVerification),
    ...formMethods
  };
};
