import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export default function Button({
    variant = "primary",
    className= "",
    ...props
}: ButtonProps){
    const base = "w-full px-4 py-4 rounded-x1 transition-all duration-200 font-medium border rounded-[10px] shadow-lg hover:scale-[1.01]";
    const styles = {
        primary: "w-full bg-gradient-to-r from-[#13263f] via-[#1f3d63] to-[#1b3354] text-white py-4 rounded-lg font-semibold hover:from-[#2a4d7a] hover:to-[#1e3a5f] transition shadow-lg shadow-[#4a9eff]/10 hover:shadow-xl hover:shadow-[#4a9eff]/5 transform hover:-translate-y-0.5 border border-[#4a9eff]/30",
        secondary: "bg-zinc-900 hover:bg-zinc-600 text-white",
    };

    return (
        <button className={`${base} ${styles[variant]} ${className}`}
        {...props} />
    );

        }

        