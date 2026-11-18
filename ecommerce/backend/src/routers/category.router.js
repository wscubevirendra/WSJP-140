import { Router } from "express";
import { create, deleteById, read, readById, statusUpdate, updateById } from "../controllers/category.controller.js";
const router = Router();

router.post("/create", create);
router.get("/", read);
router.get("/:id", readById);
router.patch("/status-update/:id", statusUpdate);
router.delete("/delete/:id", deleteById);
router.put("/update/:id", updateById);


export default router;