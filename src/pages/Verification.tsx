import { Mail, ShieldCheck } from "lucide-react";
import { VerificationPanel } from "@/modules/Auth";

export const Verification = () => {
  const email = "max@mail.ru";

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full max-w-md px-8">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400 opacity-30 blur-xl"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 shadow-lg">
              <ShieldCheck className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        <h1 className="mb-3 text-center text-3xl font-bold text-gray-900">Verify Your Email</h1>

        <p className="mb-2 text-center text-gray-600">We've sent a verification code to</p>
        <div className="mb-8 flex items-center justify-center gap-2">
          <Mail className="h-4 w-4 text-blue-500" />
          <span className="font-semibold text-gray-900">{email}</span>
        </div>

        <div className="mb-8">
          <VerificationPanel />
        </div>

        <div className="text-center">
          <p className="mb-4 text-gray-600">Didn't receive the code?</p>
          <button className="font-semibold text-blue-600 transition-colors hover:text-blue-700">
            Resend code in <span className="tabular-nums">00:55</span>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Check your spam folder if you don't see the email
        </p>
      </div>
    </div>
  );
};
