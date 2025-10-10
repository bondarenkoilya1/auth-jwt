import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp.js";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button, Typography } from "@/components/index.js";

export const VerificationPanel = () => {
  const email = "max@master.com";

  return (
    <form className="r-4 w-110 rounded-md bg-gray-100 p-4" onSubmit={(e) => e.preventDefault()}>
      <Typography.H4 className="text-center">Verify your email address</Typography.H4>
      <p className="mt-2 text-center text-sm text-gray-700">
        We've sent you verification code on <span className="font-bold text-black">{email}</span>
      </p>

      <div className="mt-4 flex justify-center">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} autoFocus={true}>
          <InputOTPGroup>
            {Array.from({ length: 6 }).map((_, i) => (
              <InputOTPSlot key={i} index={i} className="h-12 w-12" />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button className="mt-6 block w-full" type="submit">
        Verify and login
      </Button>
    </form>
  );
};
