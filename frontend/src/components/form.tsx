import {useState} from "react";
import Button from "../components/button";
import Input from "./input";
import Select from "../components/select";


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

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(form);
    }

    

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input name="name" label="Nome da Barbearia" placeholder="Ex: Barbearia do João" required onChange={handleChange} />
            <Input name="owner" label="Nome do responsável" placeholder="Ex: João Silva" required onChange={handleChange} />
            <Input name="email" label="E-mail" type="email" required placeholder="Ex: contato@barbearia.com" value={form.email} onChange={handleChange} />
            <Input name="phone" label="Telefone/Whatsapp" placeholder="Ex: (49) 99999-9999" required value={form.phone} onChange={handleChange} />
            <Input name="city" label="Cidade" placeholder="Cidade" required onChange={handleChange} />
            <Select name="state" label="Estado" value={form.state} options={states} onChange={handleChange} />
            <Input name="chairs" label="Número de Cadeiras" required type="number" min={1} step={1} value={form.chairs} onChange={handleChange} />
            <Button type="submit"> Cadastrar </Button>
        </form>
    )
}

