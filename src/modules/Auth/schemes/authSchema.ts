import * as z from "zod";

export const authSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(50)
});

export const verificationSchema = z.object({
  code: z.string().length(6)
});

export type AuthValues = z.infer<typeof authSchema>;
export type VerificationValues = z.infer<typeof verificationSchema>;
