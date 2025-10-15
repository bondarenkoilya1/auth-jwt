import type { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/lib/utils.ts";

type DefaultFormProps = ComponentPropsWithoutRef<"form">;

export const Form: FC<DefaultFormProps> = ({ children, className, ...props }) => {
  return (
    <form className={cn(className, "r-4 mx-auto mt-6 w-110 rounded-md bg-gray-100 p-4")} {...props}>
      {children}
    </form>
  );
};
