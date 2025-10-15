import * as z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(50)
});

export const registerSchema = z.object({
  username: z.string().min(1),
  email: z.email(),
  password: z.string().min(8).max(50)
});

export const verificationSchema = z.object({
  code: z.string().length(6)
});

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
export type VerificationValues = z.infer<typeof verificationSchema>;
