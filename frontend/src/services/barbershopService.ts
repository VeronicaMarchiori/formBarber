const API_URL = "http://localhost:3000/barbershops";

export type Barbershop ={
    id?: number;
    name: string;
    owner: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    chairs: string | number;

};

export async function createBarbershop(data: Barbershop) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            ...data,
            chairs: Number(data.chairs),
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro ao cadastrar barbearia");
    }

    return response.json();
}

export async function getBarbershops() {
    const response = await fetch(API_URL);

    if (!response.ok){
        throw new Error("Erro ao buscar barbearias");
    }

    return response.json();
}

export async function deleteBarbershop(id:number){
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir barbearia");
    }

    return response.json();
}

export async function updateBarbershop(id: number, data: Barbershop){
    const response = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...data,
            chairs: Number(data.chairs),
        }),
    });

    if (!response.ok) {
        throw new Error(error.message || "Erro ao atualizar barbearia!");
    }
    return response.json();
}