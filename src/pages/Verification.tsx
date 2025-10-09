import { MailOpen } from "lucide-react";

export const Verification = () => {
  const email = "max@mail.ru"

  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold uppercase">Please verify your email address</h1>
        <MailOpen size={180} className="mt-6"/>
      <p className="mt-18 text-2xl">Enter the verification code we sent to: <span className="block text-center text-blue-400">{email}</span></p>
      <p className="mt-18 text-2xl">Resend code in 00:55</p>
    </div>
  );
};
