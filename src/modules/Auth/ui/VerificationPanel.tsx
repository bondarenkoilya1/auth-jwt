import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp.js";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Typography } from "@/components/index.js";

export const VerificationPanel = () => {
  return (
    <div className="r-4 flex w-110 items-center justify-between rounded-md bg-gray-100 p-4">
      <Typography.P className="text-bold">Verify your email address:</Typography.P>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        onComplete={() => console.log("Verification")}
        className="">
        <InputOTPGroup>
          {Array.from({ length: 6 }).map((_, i) => (
            <InputOTPSlot key={i} index={i} className="h-9 w-8" />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};
