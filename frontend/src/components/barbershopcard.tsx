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
        <div className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg hover:bg-zinc-800 transition">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
            <Store size={20}/><h2 className="font-title font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>
            </div>
            <div className="flex gap-2 shrink-0">
                    <button type="button" onClick={onEdit} className="flex h-6 w-6 items-center justify-center rounded-lg text-slate-400 hover:bg-[#4a9eff]/10 hover:text-[#4a9eff] transition" title="Editar">
                    <Pencil size={16}/>
                    </button>
                    <button type="button" onClick={() => onDelete?.(id)} className="flex h-6 w-6 items-center justify-center rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition" title="Excluir">
                    <Trash2 size={16} />
                    </button>
                    </div>
            </div>
            
            <p className="font-body flex items-center gap-3 text-sm text-zinc-400">
               <User size={16}/>{owner}
            </p>
            <p className="font-body flex items-center gap-3 text-sm text-zinc-400">
                <MapPin size={16}/> Cidade: {city}
            </p>
            <p className="font-body flex items-center gap-3 text-sm text-zinc-400">
               <Mail size={16}/> Email: {email}
            </p>
            <p className="font-body flex items-center gap-3 text-sm text-zinc-400">
                <Phone size={16}/> Telefone: {phone}
            </p>
            <p className="font-body flex items-center gap-3 text-sm text-zinc-400">
               <Map size={16}/> Estado: {state}
            </p>
            <p className="font-body flex items-center gap-3 text-sm text-zinc-400">
               <Armchair size={16}/> Qtde Cadeiras: {chairs}
            </p>
            
        </div>
    );
}