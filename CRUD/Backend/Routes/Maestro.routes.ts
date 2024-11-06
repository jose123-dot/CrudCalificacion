import express from "express";
const router = express.Router();

import MaestroController from "../Controllers/Maestro.Ctrl";
const MaestroCtrl = new MaestroController();

router.get("/maestro", MaestroCtrl.getAll.bind(MaestroCtrl));
router.post("/maestro", MaestroCtrl.create.bind(MaestroCtrl));
router.delete("/maestro", MaestroCtrl.delete.bind(MaestroCtrl));
router.put("/maestro", MaestroCtrl.update.bind(MaestroCtrl));

export default router;
