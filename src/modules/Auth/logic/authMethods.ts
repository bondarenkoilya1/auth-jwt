import { fetchItem } from "@/lib/fetchItem.ts";

type StatusType = { status: string };
type RegisterType = StatusType & { data: { User: unknown; token: string } };
type VerifyType = StatusType & { message: string };

export const register = (username: string, email: string, password: string) =>
  fetchItem<RegisterType>("/auth/register", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" }
  });

export const verifyEmail = (code: string, token: string) =>
  fetchItem<VerifyType>("/auth/confirm", {
    method: "POST",
    body: JSON.stringify({ code, token }),
    headers: { "Content-Type": "application/json" }
  });

export const login = (email: string, password: string) =>
  fetchItem("/token", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  });

export const logout = () => fetchItem("/token/blacklist", { method: "POST" });
