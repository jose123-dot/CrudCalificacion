import express from "express";
const router = express.Router();

import AsignaturaController from "../Controllers/Asignatura.Ctrl";
const AsignaturaCtrl = new AsignaturaController();

router.get("/asignatura", AsignaturaCtrl.getAll.bind(AsignaturaCtrl));
router.post("/asignatura", AsignaturaCtrl.create.bind(AsignaturaCtrl));
router.delete("/asignatura", AsignaturaCtrl.delete.bind(AsignaturaCtrl));
router.put("/asignatura", AsignaturaCtrl.update.bind(AsignaturaCtrl));

export default router;
