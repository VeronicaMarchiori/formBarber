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

export async function updateBarbershop(req: Request, res: Response){
    try {
        const { id } = req.params;

        const{
            name,
            owner,
            email,
            phone,
            city,
            state,
            chairs,
        } = req.body;

        const query = `
        UPDATE barbershops
        SET 
        name= $1,
        owner= $2,
        email= $3,
        phone= $4,
        city= $5,
        state = $6,
        chairs = $7
        WHERE id= $8
        RETURNING *;
        `;

        const values = [
            name,
            owner,
            email,
            phone,  
            city,   
            state,
            chairs,
            id,
        ];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Barbearia não encontrada",
            });
        }

        return res.status(200).json({
            message: "Barbearia atualizada com sucesso",
            barbershop: result.rows[0],
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            messagee: "Erro ao atualizar barbearia",
        });
    }
}

export async function deleteBarbershop(req: Request, res: Response){
    try{
        const {id} = req.params;

        const result=await pool.query(
            "DELETE FROM barbershops WHERE id = $1 RETURNING *;",
            [id]
        );

        if (result.rows.length ===0) {
            return res.status(404).json({
                message: "Barbearia não encontrada",
            });
        }

        return res.status(200).json({
            message: "Barbearia removida com sucesso",
        });
    } catch (error){
        console.error(error);

        return res.status(500).json({
            message: "Erro ao remover barbearia",
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