import {Store, 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Map,
    Armchair
 } from "lucide-react";

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
            <div className="flex items-center gap-3">
            <Store size={20}/><h2 className="font-title font-semibold text-lg">{name}</h2>
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