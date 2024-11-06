import express from "express";
const router = express.Router();

import AsistenciaController from "../Controllers/Asistencia.Ctrl";
const AsistenciaCtrl = new AsistenciaController();

router.get("/asistencia", AsistenciaCtrl.getAll.bind(AsistenciaCtrl));
router.post("/asistencia", AsistenciaCtrl.create.bind(AsistenciaCtrl));
router.delete("/asistencia", AsistenciaCtrl.delete.bind(AsistenciaCtrl));
router.put("/asistencia", AsistenciaCtrl.update.bind(AsistenciaCtrl));

export default router;
