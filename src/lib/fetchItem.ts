import { API_URL } from "@/app/config.js";

const baseUrl = API_URL;

export async function fetchItem<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`, { ...options, credentials: "include" });

  if (!response.ok) throw response;
  return (await response.json()) as T;
}
