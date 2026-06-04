import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export default function Button({
    variant = "primary",
    className= "",
    ...props
}: ButtonProps){
    const base = "px-4 py-2 rounded transition gont-medium";
    const styles = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-zinc-900 hover:bg-zinc-600 text-white",
    };

    return (
        <button className={`${base} ${styles[variant]} ${className}`}
        {...props} />
    );

        }