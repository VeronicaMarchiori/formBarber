type BarberShopCardProps ={
    name: string;
    owner: string;
    city: string;
};

export default function BarberShopCard({
    name,
    owner,
    city,

}: BarberShopCardProps) {
    
    return (
        <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg hover:bg-zinc-800 transition">
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-sm text-zinc-400">
                Responsável: {owner}
            </p>
            <p className="text-sm text-zinc-400">
                Cidade: {city}
            </p>
        </div>
    );
}