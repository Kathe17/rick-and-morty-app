import React from "react";
import clsx from "clsx";
import Typography, { type TypographyProps } from "./Typography";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    text?: string;
    textProps?: TypographyProps
    width?: string;
    height?: string;
    aspect?: string;
    rounded?: string;
    padding?: string;
    selected?: boolean;
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLButtonElement | null>;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    text,
    textProps = { variant: "p", size: "sm", weight: "normal" },
    width = "w-full",
    height = "h-full",
    aspect,
    rounded = "rounded-lg",
    padding,
    type = "button",
    selected = false,
    children,
    className,
    ref,
    ...rest
}) => (
    <button
        ref={ref}
        type={type}
        className={clsx(
            `group`,
            `flex items-center justify-center ${width} ${aspect ? aspect : height} ${rounded} ${padding} transition`,
            (!selected && !rest.disabled) && "hover:bg-gray-200 hover:text-gray-700",
            (selected ? "bg-primary-100" : variant === "secondary" ? (!rest.disabled ? "bg-primary-600" : "bg-gray-100") : "bg-transparent"),
            className
        )}
        {...rest}
    >
        {text && <Typography
            className="group-hover:text-gray-900"
            {...textProps}
            color={(selected ? "text-primary-600" : variant === "secondary" ? (!rest.disabled ? "text-white" : "text-gray-500") : "text-gray-900")}
        >
            {text}
        </Typography>}
        {children}
    </button>
);

export default Button;