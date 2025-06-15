import React, { type JSX } from "react";
import clsx from "clsx";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
type Weight = "light" | "normal" | "medium" | "semibold" | "bold";
type Style = "normal" | "italic";

export interface TypographyProps {
  variant?: Variant;
  size?: Size;
  weight?: Weight;
  style?: Style;
  color?: string; // Tailwind class or hex
  className?: string;
  children: React.ReactNode;
}

const sizeMap: Record<Size, string> = {
  xs: "!text-xs !leading-4",
  sm: "!text-sm !leading-5",
  base: "!text-base !leading-6",
  lg: "!text-lg !leading-7",
  xl: "!text-xl !leading-7",
  "2xl": "!text-2xl !leading-8",
  "3xl": "!text-3xl !leading-9",
  "4xl": "!text-4xl !leading-10",
  "5xl": "!text-5xl !leading-none",
  "6xl": "!text-6xl !leading-none",
  "7xl": "!text-7xl !leading-none",
  "8xl": "!text-8xl !leading-none",
  "9xl": "!text-9xl !leading-none",
};

const weightMap: Record<Weight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const styleMap: Record<Style, string> = {
  normal: "not-italic",
  italic: "italic",
};

const variantMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  label: "label",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  size,
  weight = "normal",
  style = "normal",
  color,
  className,
  children,
  ...rest
}) => {
  const Tag = variantMap[variant] || "p";
  const sizeClass = size ? sizeMap[size] : "";
  const colorClass = color?.startsWith("text-") ? color : "";
  const customColor = color && !colorClass ? { color } : {};

  return (
    <Tag
      className={clsx(
        sizeClass,
        weightMap[weight],
        styleMap[style],
        colorClass,
        "font-sans",
        className
      )}
      style={customColor}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Typography;