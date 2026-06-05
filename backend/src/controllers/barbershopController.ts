import { Request, response } from "express";
import { pool } from "../database/connection";

export async function createBarbershop(req: Request, res: Response) {
    try {
        const{
            name,
            owner,
            email,
            phone,
            city,
            state,
            chairs
        } = req.body;
        const query = `
        INSERT INTO barbershops
        (name, owner, email, phone, city, state, chairs)
        VALUES ($1, $2, $3,$4,$5,$6,$7)
        RETURNING *
        `;
        const values = [
            name,
            owner,
            email,
            phone,
            city,
            state,
            chairs,
        ];

        const result = await pool.query(query, values);
        
        return res.status(201).json({
            message: "Barbearia cadastrada com sucesso",
            barbershop: result.rows[0],
        });
    } catch (error){
        console.error(error);

        return res.status(500).json({
            message: "Erro ao cadstrar barbearia"
        });
    }
}

export async function getBarbershops(req: Request, res: Response){
    try {
        const result = await pool.query(
            "SELECT * FROM barbershops ORDER BY id"
        );

        return res.status(200).json(result.rows); 
    } catch (error){

        return res.status(500).json({
            message: "Erro sao buscar barbearias",
        });
    }
}