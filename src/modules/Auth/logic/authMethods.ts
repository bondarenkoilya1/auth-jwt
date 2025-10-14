import { fetchItem } from "@/lib/fetchItem.ts";

export const register = (username: string, email: string, password: string) =>
  fetchItem("/auth/register", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" }
  });

export const login = (email: string, password: string) =>
  fetchItem("/token", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  });

export const verifyAndLogin = (email: string, password: string, code: string) =>
  fetchItem("/verify-and-login", {
    method: "POST",
    body: JSON.stringify({ email, password, code }),
    headers: { "Content-Type": "application/json" }
  });

export const logout = () => fetchItem("/token/blacklist", { method: "POST" });
