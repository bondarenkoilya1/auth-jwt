import * as z from "zod";

export const authSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(50)
});

export type AuthValues = z.infer<typeof authSchema>;
