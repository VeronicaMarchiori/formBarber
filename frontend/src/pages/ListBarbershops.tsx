import Card from "../components/card";
import BarberShopCard from "../components/barbershopcard";
//dados mock só pra testar por agora
const barbershops = [
    {
        id: 1,
        name: "Barbearia do João",
        owner: "João Silva",
        city: "Chapecó"
    },
    
    {
        id: 2,
        name: "Barbearia da Maria",
        owner: "Maria dos Santos",
        city: "Chapecó"
    }

];


export default function ListBarberShops() {
    return (
        <div className="max-w-4x1 mx-auto mt-6"> 
            {/* CARD PRINCIPAL */}
            <Card>
            <h1>Listagem Barbearias</h1>
            {/* CARDS MENORES */}
            <div className="grip gap-4">
                {barbershops.map((shop) => (
                    <BarberShopCard 
                    key={shop.id}
                    name={shop.name}
                    owner={shop.owner}
                    city={shop.city} />
                ))}
        
            </div>
            </Card>
        </div>
        );
    }
