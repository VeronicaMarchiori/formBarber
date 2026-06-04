import {useState} from "react";
import Button from "../components/button";


export default function Form() {

    const [form, setForm] = useState({
        name: "",
        owner: "",
        email: "",
        phone:"",
        city: "",
        state: "",
        chairs:""

    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setForm({
            ...form,
            [e.target.name]: e.target.value});
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="name" placeholder="Nome da Barbearia" className="p-2 rounded bg-zinc-950" onChange={handleChange} />
            <input name="owner" placeholder="Nome do responsável" className="p-2 rounded bg-zinc-950" onChange={handleChange} />
            <input name="email" placeholder="Email" className="p-2 rounded bg-zinc-950" onChange={handleChange} />
            <input name="phone" placeholder="Telefone" className="p-2 rounded bg-zinc-950" onChange={handleChange} />
            <input name="city" placeholder="Cidade" className="p-2 rounded bg-zinc-950" onChange={handleChange} />
            <input name="state" placeholder="Estado" className="p-2 rounded bg-zinc-950" onChange={handleChange} />
            <input name="chairs" placeholder="Cadeiras" className="p-2 rounded bg-zinc-950" onChange={handleChange} />
            <button type="submit"> Cadastrar </button>
        </form>
    )
}

