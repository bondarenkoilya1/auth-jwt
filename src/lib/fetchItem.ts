import { API_URL } from "@/app/config.js";

const baseUrl = API_URL;

// const defaultOptions: RequestInit = { credentials: "include" };
export async function fetchItem<T>(url: string, options?: RequestInit): Promise<T> {
  const headers = new Headers(options?.headers);
  headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

  const response = await fetch(`${baseUrl}${url}`, { ...options, headers });

  if (!response.ok) {
    throw new Error(`Network response was not ok. Response status: ${response.status}`);
  }

  return (await response.json()) as T;
}
