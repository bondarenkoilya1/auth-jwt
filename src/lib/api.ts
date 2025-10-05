const baseUrl = "";

const defaultOptions: RequestInit = { credentials: "include" };

export async function fetchItem<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`, { ...options, ...defaultOptions });

  if (!response.ok) {
    throw new Error(`Network response was not ok. Response status: ${response.status}`);
  }

  return (await response.json()) as T;
}
