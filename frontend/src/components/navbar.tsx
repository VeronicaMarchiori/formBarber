import { Link } from 'react-router-dom';
import { Scissors, List, Plus } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full bg-gradient-to-r from-[#0f1419] via-[#1e3a5f] to-[#0a1628] p-8 text-white border-b border-[#1e3a5f]/50 px-6 py-3 flex items-center justify-between">

            <h1 className="font-title text-xl font-bold">
                <Scissors size={20}/> Formulário de Cadastro Barbearias</h1>

            <ul className="flex gap-6">
                <li>
                    <Link to="/" title="Cadastrar Barbearia" className="bg-gradient-to-r from-[#1e3a5f] to-[#0a1628] text-white w-12 h-12 flex items-center justify-center rounded-xl hover:from-[#2a4d7a] hover:to-[#1e3a5f] transition-all duration-300 border border-[#4a9eff]/30">
                    <Plus size={20}/> </Link>
                 </li>

                <li>
                    <Link to="/barbershops" title="Barbearias Cadastradas" className="bg-gradient-to-r from-[#1e3a5f] to-[#0a1628] text-white w-12 h-12 flex items-center justify-center rounded-xl hover:from-[#2a4d7a] hover:to-[#1e3a5f] transition-all duration-300 border border-[#4a9eff]/30">
                    <List size={20}/></Link>
                </li>
            </ul>
        </nav>
    );
}