type SelectProps = {
    label?: string;
    name: string;
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select ({
    label,
    name,
    value,
    options,
    onChange,
}: SelectProps) {
    return(
        <>
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm text-zinc-30">
                    {label}
                </label>
            )}
            
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="p-2 rounded bg-zinc-900 text-white border border-zinc-700 focus:border-blue-500 outline-none transition">
                    <option value="">
                        Selecione
                    </option>

                    {options.map((option) => (
                        <option 
                        key={option}
                        value={option}>
                            {option}
                        </option>
                    ))}
            </select>
            </div>
            </>
    );
}