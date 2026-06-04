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

    function handleChange(e: | React.ChangeEvent<HTMLInputElement>
                            | React.ChangeEvent<HTMLSelectElement>
     ){
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
            <Input name="name" placeholder="Nome da Barbearia" onChange={handleChange} />
            <Input name="owner" placeholder="Nome do responsável" onChange={handleChange} />
            <Input name="email" placeholder="Email" onChange={handleChange} />
            <Input name="phone" placeholder="Telefone" onChange={handleChange} />
            <Input name="city" placeholder="Cidade" onChange={handleChange} />
            <Select name="state" label="Estado" value={form.state} options={states} onChange={handleChange} />
            <Input name="chairs" placeholder="Cadeiras" onChange={handleChange} />
            <Button type="submit"> Cadastrar </Button>
        </form>
    )
}

