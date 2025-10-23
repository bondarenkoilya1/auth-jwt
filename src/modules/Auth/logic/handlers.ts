import * as React from "react";
import { logout, resendConfirmation, testLogin } from "@/modules/Auth/index.js";
import { RESPONSE_SUCCESS } from "@/constants/index.js";

export const logoutHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  await logout();
  window.location.href = "/";
};

export const testLoginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const response = await testLogin();

  if (response.status === RESPONSE_SUCCESS) window.location.href = "/profile";
};

// todo: type
export const resendConfirmationHandler = async (
  event: React.MouseEvent<HTMLButtonElement>,
  email: string
) => {
  event.preventDefault();
  const response = await resendConfirmation(email);
  localStorage.setItem("emailConfirmationToken", response?.data?.token);
  console.log(response);
};
