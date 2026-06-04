import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};


export default function Input({ label, className ="", ...props}: InputProps) {
    return(
        <div className="flex flex-col gap-1">
            {label &&(
                <label className="text-sm text-zinc-300">
                    {label}
                </label>
            )}
            <input className={`p-2 rounded bg-zinc-900 text-white outline-none border border-zinc-700 focus:border-blue-500 transition ${className}`}
            {...props}
            />
        </div>
    )
}