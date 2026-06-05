import Form from "../components/form";
import Card from "../components/card";
import { Scissors } from "lucide-react";

export default function RegisterBarberShop() {
    return (
        <div className="flex items-start justify-center p-4 min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-2xl bg-gradient-to-b from-[#1a1d23] to-[#0f1419] rounded-2xl shadow-2xl overflow-hidden border border-[#1e3a5f]/30"> 

        {/* Header */}

        <div className="bg-gradient-to-r from-[#0f1419] via-[#1e3a5f] to-[#0a1628] p-8 text-white border-b border-[#1e3a5f]/50"> 
            <div className="flex items-center gap-3">
            <Scissors className="w-10 h-10 text-[#4a9eff]"/> <h1 className="font-title text-3xl font-bold"> Cadastro de Barbearia</h1>
            </div>
            <p className="font-body text-slate-300"> Preencha os dados da sua barbearia para iniciar o cadastro. </p>
        </div>
        

        {/*Form*/}
        <div className="p-8 space-y-6">
            <Form />
        </div>
        </Card>
        </div>

    );
}