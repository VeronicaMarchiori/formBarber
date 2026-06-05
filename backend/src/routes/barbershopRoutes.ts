import { Router } from "express";
import { createBarbershop, getBarbershops } from "../controllers/barbershopController";

const router = Router();

router.post("/", createBarbershop);
router.get("/", getBarbershops);

export default router;