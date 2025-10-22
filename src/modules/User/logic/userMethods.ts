import { fetchItem } from "@/lib/fetchItem.js";

const API_PART = "/user";

export type UserResponseType = {
  data: {
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    deleted: boolean;
    email: string;
    id: string;
    role: string;
    updatedAt: string;
    username: string;
  };
  status: string;
};

export const getUser = () => fetchItem<UserResponseType>(API_PART, { credentials: "include" });
