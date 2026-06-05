import { Router } from "express";

const router = Router();

router.post("/", (req,res) => {
    const data = req.body;

    console.log("Barbearia recebida:", data);

    return res.status(201).json({
        message:"Barbearia cadastrada com sucesso",
        barbershop: data,
    });
});

export default router;