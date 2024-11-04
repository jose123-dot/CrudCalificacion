import { Schema, model, Document } from "mongoose";
import { IAsignatura } from "../Interfaces/IAsignatura";

const AsignaturaSchema = new Schema<IAsignatura>({
  nombre: { type: String, required: true },
  estatus: { type: String, required: true },
});

// Exportación del modelo
export const Asignatura = model<IAsignatura>("Asignatura", AsignaturaSchema);