import { createBrowserRouter } from "react-router";
import { Login, Register, Home } from "@/pages";
import { App } from "@/app/App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      {
        path: "register",
        Component: Register
      }
    ]
  }
]);
