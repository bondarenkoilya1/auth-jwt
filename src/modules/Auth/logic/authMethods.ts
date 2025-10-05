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

export const logout = () => fetchItem("/users/token/blacklist", { method: "POST" });
