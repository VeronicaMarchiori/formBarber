import { Request, response } from "express";

export function createBarbershop(req: Request, res: Response) {
    const data = req.body;

    console.log("Barbearia recebida:", data);
    return res.status(201).json({
        message: "Barbearia cadastrada com sucesso",
        barbershop:data,
    });
}