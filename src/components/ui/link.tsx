import { Link as LinkComponent } from "react-router";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils.ts";

type LinkProps = ComponentProps<typeof LinkComponent>;

export const Link: FC<LinkProps> = ({ children, className, to, ...rest }) => {
  return (
    <LinkComponent
      to={to}
      className={cn(className, "ml-2 text-blue-400")}
      {...rest}
    >
      {children}
    </LinkComponent>
  );
};
