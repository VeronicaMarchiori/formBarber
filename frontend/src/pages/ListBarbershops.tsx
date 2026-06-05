import Card from "../components/card";
import BarberShopCard from "../components/barbershopcard";
import { List, Store } from "lucide-react";

const barbershops: any[] =[];

export default function ListBarberShops() {
  return (
    <div className="flex items-center justify-center p-4 min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-2xl bg-gradient-to-b from-[#1a1d23] to-[#0f1419] rounded-2xl shadow-2xl overflow-hidden border border-[#1e3a5f]/30">

        {/*Header*/}
        <div className="font-title bg-gradient-to-r from-[#0f1419] via-[#1e3a5f] to-[#0a1628] p-8 text-white border-b border-[#1e3a5f]/50">
          <div className="flex items-center gap-3">
          <List className="w-10 h-10 text-[#4a9eff]" /> <h1 className="font-title text-3xl font-bold text-white"> Barbearias cadastradas</h1>
          </div>
          <p className="mt-2 font-body text-slate-200">
            Visualize os estabelecimentos cadastrados no sistema.
          </p>
        </div>

        {/*Conteúdo*/}
        <div className="p-8">
            {barbershops.length === 0?(
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Store className="text-[#4a9eff] mb-4" size={64}/>
                <h2 className="font-title text-xl font-semibold text-white"> Nenhuma Barbearia cadastrada </h2>
              <p className="font-body text-slate-400 mt-2 max-w-sm">Quando existir o cadastro de uma barbearia ele aparecerá aqui.</p>
              </div>):(
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {barbershops.map((shop) => (
                <BarberShopCard
                key={shop.id}
                name={shop.name}
                owner={shop.owner}
                email={shop.email}
                phone={shop.phone}
                city={shop.city}
                state={shop.state}
                chairs={shop.chairs}
               />
      ))}
    </div>
  )}
</div>
</Card>
</div>
  );
}