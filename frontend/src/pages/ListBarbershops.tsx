import Card from "../components/card";
import BarberShopCard from "../components/barbershopcard";
import { List } from "lucide-react";

//dados mock só pra testar por agora
const barbershops = [
    {
        id: 1,
        name: "Barbearia do João",
        owner: "João Silva",
        city: "Chapecó",
        email: "BarbeariaJoão@email.com",
        phone: "49999999999",
        state: "SC",
        chairs: "3"

    },
    
    {
        id: 2,
        name: "Barbearia da Maria",
        owner: "Maria dos Santos",
        city: "Chapecó",
        email: "BarbeariaJoão@email.com",
        phone: "49999999999",
        state: "SC",
        chairs: "3"
    }

];


export default function ListBarberShops() {
  return (
    <div className="flex items-center justify-center p-4 min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-2xl bg-gradient-to-b from-[#1a1d23] to-[#0f1419] rounded-2xl shadow-2xl overflow-hidden border border-[#1e3a5f]/30">

        {/*Header*/}
        <div className="bg-gradient-to-r from-[#0f1419] via-[#1e3a5f] to-[#0a1628] p-8 text-white border-b border-[#1e3a5f]/50">
          <List /> <h1 className="font-title text-3xl font-bold text-white"> Barbearias cadastradas</h1>
          <p className="mt-2 font-body text-slate-200">
            Visualize os estabelecimentos cadastrados no sistema.
          </p>
        </div>

        {/*Conteúdo*/}
        <div className="p-8">
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
        </div>
      </Card>
    </div>
  );
}
