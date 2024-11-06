import express from "express";
const router = express.Router();

import EstudianteController from '../Controllers/Estudiante.Ctrl'
const estudianteCtrl = new EstudianteController();

router.get("/estudiante", estudianteCtrl.getAll.bind(estudianteCtrl));
router.post("/estudiante", estudianteCtrl.create.bind(estudianteCtrl));
router.delete("/estudiante", estudianteCtrl.delete.bind(estudianteCtrl));
router.put("/estudiante", estudianteCtrl.update.bind(estudianteCtrl));

export default router;