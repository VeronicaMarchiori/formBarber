import type { ReactNode } from "react";

type CardProps ={
    children : ReactNode;
    className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`bg-zinc-800 border border-zinc-700 shadow-lg ${className}`}>
            {children}
        </div>
    );
}