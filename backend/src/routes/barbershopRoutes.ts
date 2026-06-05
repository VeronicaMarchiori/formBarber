import { Router } from "express";
import { createBarbershop, getBarbershops, updateBarbershop, deleteBarbershop } from "../controllers/barbershopController";

const router = Router();

router.post("/", createBarbershop);
router.get("/", getBarbershops);
router.put("/:id", updateBarbershop);
router.delete("/:id", deleteBarbershop);

export default router;