import { fetchItem } from "@/lib/api.ts";

export const UseAuth = () => {
  const login = (email: string, password: string) =>
    fetchItem("/token", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });

  const register = (email: string, password: string) =>
    fetchItem("/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });

  return { login, register };
};
