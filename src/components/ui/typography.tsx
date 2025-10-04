import type {
  ComponentPropsWithoutRef,
  ElementType,
  JSX,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils.ts";

type TypographyElementProps = {
  children: ReactNode;
  className?: string;
};

const TypographyElementStyles = {
  H1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
  H2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  H3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  H4: "scroll-m-20 text-xl font-semibold tracking-tight",
  P: "leading-7 [&:not(:first-child)]:mt-6",
  Ul: "my-6 ml-6 list-disc [&>li]:mt-2",
} as const;

const createTypographyComponent = <T extends keyof JSX.IntrinsicElements>(
  tag: T,
  styles: string,
) => {
  const Component = ({
    children,
    className,
    ...props
  }: TypographyElementProps & ComponentPropsWithoutRef<T>) => {
    const Element = tag as ElementType;
    return (
      <Element className={cn(styles, className)} {...props}>
        {children}
      </Element>
    );
  };
  Component.displayName = `Typography.${String(tag).toUpperCase()}`;
  return Component;
};

export const Typography = {
  H1: createTypographyComponent("h1", TypographyElementStyles.H1),
  H2: createTypographyComponent("h2", TypographyElementStyles.H2),
  H3: createTypographyComponent("h3", TypographyElementStyles.H3),
  H4: createTypographyComponent("h4", TypographyElementStyles.H4),
  P: createTypographyComponent("p", TypographyElementStyles.P),
  Ul: createTypographyComponent("ul", TypographyElementStyles.Ul),
} as const;
