import { Router } from "express";
import { createBarbershop } from "../controllers/barbershopController";

const router = Router();

router.post("/", createBarbershop);

export default router;