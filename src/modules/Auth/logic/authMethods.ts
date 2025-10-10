import { fetchItem } from "@/lib/fetchItem.ts";

export const login = (email: string, password: string) =>
  fetchItem("/token", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  });

export const register = (email: string, password: string) =>
  fetchItem("/register", {
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
