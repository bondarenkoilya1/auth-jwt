import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp.js";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export const VerificationPanel = () => {
  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      onComplete={() => console.log("Verification")}>
      <InputOTPGroup className="justify-center gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="h-14 w-12 rounded-xl border-2 border-gray-200 text-xl font-bold transition-all duration-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
};
