import * as React from "react";
import { logout, testLogin } from "@/modules/Auth/index.js";
import { RESPONSE_SUCCESS } from "@/constants/index.js";

export const logoutHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  await logout();
  localStorage.removeItem("token");
};

export const testLoginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const response = await testLogin();

  if (response.status === RESPONSE_SUCCESS) {
    localStorage.setItem("accessToken", response.data.accessToken);
  }
};
