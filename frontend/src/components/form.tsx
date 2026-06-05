
import { useState } from "react";

import { createBarbershop } from "../services/barbershopService";
import Button from "../components/button";
import Input from "./input";
import Select from "../components/select";
import { Store, 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Map,
    Armchair
 } from "lucide-react";

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
    const states =[
        "AC", "AL", "AP", "AM", "BA",
        "CE", "DF", "ES", "GO", "MA",
        "MT", "MS", "MG", "PA", "PB",
        "PR", "PE", "PI", "RJ", "RN",
        "RS", "RO", "RR", "SC", "SP",
        "SE", "TO"
    ];

    function formatPhone(value: string) {
        const numbers = value.replace(/\D/g, "");

        if (numbers.length <= 2) {
            return numbers;
        }

        if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        }

        return `(${numbers.slice(0, 2)}) ${numbers.slice(2,7)}-${numbers.slice(7, 11)}`;
        }

    function handleChange(e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>) {
                const { name, value } = e.target;

                if (name === "phone") {
                    setForm({
                    ...form,
                    phone: formatPhone(value),
                    });

                    return;
                }

                setForm({
                    ...form,
                    [name]: value,
                });
    
            }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const result = await createBarbershop(form);

            console.log(result);

            alert("Barbearia cadastrada com sucesso");

            setForm({
                name: "",
                owner:"",
                email:"",
                phone:"",
                city:"",
                state:"",
                chairs:""
            });
        } catch (error) {
            console.error(error);
                alert("Erro ao cadastrar barbearia");
            }
        }
    

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex items-center gap-2"><Store size={16}/>Nome da Barbearia</label>
            <Input name="name" placeholder="Ex: Barbearia do João" required value={form.name} onChange={handleChange} />
            <label className="flex items-center gap-2"><User size={16}/>Nome do responsável</label>
            <Input name="owner" placeholder="Ex: João Silva" required value={form.owner} onChange={handleChange} />
            <label className="flex items-center gap-2"><Mail size={16}/>E-mail</label>
            <Input name="email" label="" type="email" required placeholder="Ex: contato@barbearia.com" value={form.email} onChange={handleChange} />
            <label className="flex items-center gap-2"><Phone size={16}/>Telefone/Whatsapp</label>
            <Input name="phone" placeholder="Ex: (49) 99999-9999" required value={form.phone} onChange={handleChange} />
            <label className="flex items-center gap-2"><MapPin size={16}/>Cidade</label>
            <Input name="city" placeholder="Ex: Chapecó" required value={form.city} onChange={handleChange} />
            <label className="flex items-center gap-2"><Map size={16}/>Estado</label>
            <Select name="state" value={form.state} options={states} onChange={handleChange} />
            <label className="flex items-center gap-2"><Armchair size={16}/>Número de Cadeiras</label>
            <Input name="chairs" placeholder="Ex: 2" required type="number" min={1} step={1} value={form.chairs} onChange={handleChange} />
            <Button className="font-body font-semibold" type="submit"> Cadastrar </Button>
        </form>
    )
}

