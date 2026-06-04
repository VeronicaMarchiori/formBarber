import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="w-full bg-zinc-900 text-white px-6 py-4 flex items-center justify-between">

            <h1 className="text-xl font-semibold">
                Formulário Barbearias
            </h1>

            <ul className="flex gap-6">
                <li>
                    <Link to="/" className="hover:text-blue-400 transition">Cadastrar</Link>
                </li>

                <li>
                    <Link to="/barbershops" className="hover:text-blue-400 transition">Barbearias</Link>
                </li>
            </ul>
        </nav>
    );
}