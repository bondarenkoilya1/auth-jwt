import { useForm } from "react-hook-form";
import { verificationSchema, type VerificationValues, verifyEmail } from "@/modules/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { RESPONSE_SUCCESS } from "@/constants/index.js";
import { useNavigate } from "react-router";
import { useAuthActions } from "@/app/store/useAuthStore.js";

export const useVerify = () => {
  const formMethods = useForm<VerificationValues>({
    resolver: zodResolver(verificationSchema)
  });
  const navigate = useNavigate();
  const { setIsVerificationRequested } = useAuthActions();

  const onVerify = async (values: VerificationValues) => {
    const token = localStorage.getItem("emailConfirmationToken");
    const { code } = values;

    if (token) {
      const response = await verifyEmail(code, token);
      if (response.status === RESPONSE_SUCCESS) {
        setIsVerificationRequested(false);
        return navigate("/login");
      }
    }

    throw new Error("Verification error. There is no available token");
  };

  return {
    onVerify,
    ...formMethods
  };
};
