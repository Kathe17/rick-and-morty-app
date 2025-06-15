export type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
export type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
export type Weight = "light" | "normal" | "medium" | "semibold" | "bold";
export type Style = "normal" | "italic";

export interface TypographyProps {
    variant?: Variant;
    size?: Size;
    weight?: Weight;
    style?: Style;
    color?: string;
    className?: string;
    children: React.ReactNode;
}
