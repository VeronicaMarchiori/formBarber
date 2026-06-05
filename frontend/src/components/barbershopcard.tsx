import { Scissors } from "lucide-react";

type BarberShopCardProps ={
    name: string;
    owner: string;
    city: string;
};

export default function BarberShopCard({
    name,
    owner,
    city,
    email,
    phone,
    state,
    chairs,

}: BarberShopCardProps) {
    
    return (
        <div className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg hover:bg-zinc-800 transition">
            <Scissors size={20}/><h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-sm text-zinc-400">
                Responsável: {owner}
            </p>
            <p className="text-sm text-zinc-400">
                Cidade: {city}
            </p>
            <p className="text-sm text-zinc-400">
                Email: {email}
            </p>
            <p className="text-sm text-zinc-400">
                Telefone: {phone}
            </p>
            <p className="text-sm text-zinc-400">
                Estado: {state}
            </p>
            <p className="text-sm text-zinc-400">
                Qtde Cadeiras: {chairs}
            </p>
        </div>
    );
}