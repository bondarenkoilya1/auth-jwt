import { useForm } from "react-hook-form";
import { verificationSchema, type VerificationValues, verifyEmail } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { RESPONSE_SUCCESS } from "@/constants/index.js";

export const useVerifyForm = () => {
  const formMethods = useForm<VerificationValues>({
    resolver: zodResolver(verificationSchema)
  });

  const onVerify = async (values: VerificationValues) => {
    const token = localStorage.getItem("emailConfirmationToken");
    const { code } = values;

    if (token) {
      const response = await verifyEmail(code, token);
      if (response.status === RESPONSE_SUCCESS) return "login";
      return;
    }

    throw new Error("Verification error. There is no available token");
  };

  return {
    onVerify,
    ...formMethods
  };
};
