import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import barbershopRoutes from "./routes/barbershopRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API funcionando??");
});

app.use("/barbershops", barbershopRoutes);

//apenas pra eu conseguir testar se está funcionando
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

});

