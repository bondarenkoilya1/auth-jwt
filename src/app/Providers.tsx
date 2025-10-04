import type { FC } from "react";
import { RouterProvider } from "react-router/dom";
import { router } from "@/app/router.ts";

export const Providers: FC = () => <RouterProvider router={router} />;
