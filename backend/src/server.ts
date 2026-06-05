import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import barbershopRoutes from "./routes/barbershopRoutes";
import { pool } from "./database/connection";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API funcionando");
});

app.get("/db-test", async(req,res) =>{
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
});

app.use("/barbershops", barbershopRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

});

