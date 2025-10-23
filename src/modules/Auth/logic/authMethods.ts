import { fetchItem } from "@/lib/fetchItem.ts";

type StatusType = { status: string };
type RegisterType = StatusType & { data: { User: unknown; token: string } };
type VerifyType = StatusType & { message: string };
type LoginType = StatusType & {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

const API_PART = "/auth";

export const register = (username: string, email: string, password: string) =>
  fetchItem<RegisterType>(`${API_PART}/register`, {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" }
  });

export const verifyEmail = (code: string, token: string) =>
  fetchItem<VerifyType>(`${API_PART}/confirm`, {
    method: "POST",
    body: JSON.stringify({ code, token }),
    headers: { "Content-Type": "application/json" }
  });

export const login = (email: string, password: string) =>
  fetchItem<LoginType>(`${API_PART}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  });

export const logout = () => fetchItem<VerifyType>(`${API_PART}/logout`, { method: "POST" });

export const testLogin = () => fetchItem<LoginType>(`${API_PART}/test-login`, { method: "POST" });

export const refreshToken = () => fetchItem<LoginType>(`${API_PART}/refresh`, { method: "POST" });
