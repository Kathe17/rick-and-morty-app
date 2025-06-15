import type { TypographyProps } from "../../Typography/models/typography.model";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    text?: string;
    textProps?: TypographyProps;
    width?: string;
    height?: string;
    aspect?: string;
    rounded?: string;
    padding?: string;
    selected?: boolean;
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLButtonElement | null>;
}