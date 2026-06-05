import {Store, 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Map,
    Armchair,
    Pencil,
    Trash2
 } from "lucide-react";

type BarberShopCardProps ={
    id: number;
    name: string;
    owner: string;
    city: string;
    email: string;
    phone:string;
    state:string;
    chairs:string;

    onDelete?: (Id:number) => void;
    onEdit?: () => void;
};

export default function BarberShopCard({
    id,
    name,
    owner,
    city,
    email,
    phone,
    state,
    chairs,
    onDelete,
    onEdit,

}: BarberShopCardProps) {
    
    return (
    <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg hover:bg-zinc-800 transition min-w-0">
        <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 min-w-0">
            <Store size={20} className="shrink-0" />

            <h2 className="font-title font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
            {name}
            </h2>
        </div>

        <div className="flex gap-1 shrink-0">
            <button
            type="button"
            onClick={onEdit}
            className="flex h-6 w-6 items-center justify-center rounded-lg text-slate-400 hover:bg-[#4a9eff]/10 hover:text-[#4a9eff] transition"
            title="Editar"
            >
            <Pencil size={15} />
            </button>

            <button
            type="button"
            onClick={() => onDelete?.(id)}
            className="flex h-6 w-6 items-center justify-center rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition"
            title="Excluir"
            >
            <Trash2 size={15} />
            </button>
        </div>
        </div>

        <p className="font-body flex items-start gap-2 text-sm text-zinc-400 break-words">
        <User size={16} className="mt-0.5 shrink-0" />
        <span>{owner}</span>
        </p>

        <p className="font-body flex items-start gap-2 text-sm text-zinc-400 break-words">
        <MapPin size={16} className="mt-0.5 shrink-0" />
        <span>Cidade: {city}</span>
        </p>

        <p className="font-body flex items-start gap-2 text-sm text-zinc-400 break-words">
        <Mail size={16} className="mt-0.5 shrink-0" />
        <span>Email: {email}</span>
        </p>

        <p className="font-body flex items-start gap-2 text-sm text-zinc-400 break-words">
        <Phone size={16} className="mt-0.5 shrink-0" />
        <span>Telefone: {phone}</span>
        </p>

        <p className="font-body flex items-start gap-2 text-sm text-zinc-400 break-words">
        <Map size={16} className="mt-0.5 shrink-0" />
        <span>Estado: {state}</span>
        </p>

        <p className="font-body flex items-start gap-2 text-sm text-zinc-400 break-words">
        <Armchair size={16} className="mt-0.5 shrink-0" />
        <span>Qtde Cadeiras: {chairs}</span>
        </p>
    </div>
    );
}