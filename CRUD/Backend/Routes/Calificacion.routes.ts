import express from "express";
const router = express.Router();

import CalificacionController from "../Controllers/Calificacion.Ctrl";
const CalificacionCtrl = new CalificacionController();

router.get("/calificacion", CalificacionCtrl.getAll.bind(CalificacionCtrl));
router.post("/calificacion", CalificacionCtrl.create.bind(CalificacionCtrl));
router.delete("/calificacion", CalificacionCtrl.delete.bind(CalificacionCtrl));
router.put("/calificacion", CalificacionCtrl.update.bind(CalificacionCtrl));

export default router;
