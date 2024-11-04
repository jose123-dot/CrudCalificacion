import express from "express";
const router = express.Router();

import EstudianteController from '../Controllers/Estudiante.Ctrl'
const estudianteCtrl = new EstudianteController();

router.get("/estudiante", estudianteCtrl.getAll.bind(estudianteCtrl));
router.post("/estudiante", estudianteCtrl.create.bind(estudianteCtrl));
router.delete("/estudiante/:id", estudianteCtrl.delete.bind(estudianteCtrl));
router.put("/estudiante/:id", estudianteCtrl.update.bind(estudianteCtrl));

export default router;