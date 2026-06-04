import Form from "../components/Form";
import Card from "../components/card";

export default function RegisterBarberShop() {
    return (
        <div className="min-w-[300-px] max-w-[600px] mx-auto">
        <Card className="max-w-2x1 mx-auto overflow-hidden rounded-[10px] p-0"> 
        <div className="bg-gradient-to-r from-[#13263f] via-[#1f3d63] to-[#1b3354] px-8 py-8"> 
            <h1 className="text-3x1 font-bold text-white">Cadastro de Barbearia</h1>
            <p className="text-slate-200 mt-2"> Preencha os dados da sua barbearia para iniciar o cadastro. </p>
        </div>
        <div className="p-8">
            <Form />
        </div>
        </Card>
        </div>

    );
}