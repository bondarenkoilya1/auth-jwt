import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

export const Form: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <form
      className={cn(
        className,
        "r-4 mx-auto mt-8 w-110 rounded-md bg-gray-100 p-4",
      )}
      {...props}
    >
      {children}
    </form>
  );
};
