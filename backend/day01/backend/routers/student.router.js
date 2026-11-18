import { Router } from "express";
import { create, deletebyId, read, statusUpdate, updateById } from "../controllers/student.controller.js";
const router = Router();

router.post("/create", create);
router.get("/", read);
router.delete("/delete/:id", deletebyId);
router.put("/status-update/:id", statusUpdate);
router.patch("/update/:id", updateById);


export default router