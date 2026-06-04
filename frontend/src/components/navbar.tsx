import { Link } from 'react-router-dom';
import Button from './button';

export default function Navbar() {
    return (
        <nav className="w-full bg-gradient-to-r from-[#13263f] via-[#1f3d63] to-[#1b3354] border-b border-blue-900/40 text-white px-6 py-3 flex items-center justify-between">

            <h1 className="text-xl font-semibold">
                Formulário Barbearias
            </h1>

            <ul className="flex gap-6">
                <li>
                    <Link to="/" className="bg-gradient-to-r from-[#1e3a5f] to-[#0a1628] text-whitepx-4 py-2 rounded-[8px] font-semibold hover:from-[#2a4d7a] hover:to-[#1e3a5f] transition-all duration-300 border border-[#4a9eff]/30">
                    Cadastrar </Link>
                 </li>

                <li>
                    <Link to="/barbershops" className="bg-gradient-to-r from-[#1e3a5f] to-[#0a1628] text-whitepx-4 py-2 rounded-[8px] font-semibold hover:from-[#2a4d7a] hover:to-[#1e3a5f] transition-all duration-300 border border-[#4a9eff]/30">Barbearias</Link>
                </li>
            </ul>
        </nav>
    );
}