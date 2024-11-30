import { ICalificacion } from "../Interfaces/ICalificacion";
import { Schema, model, Document } from "mongoose";

// Definición del esquema de Mongoose
const CalificacionSchema = new Schema<ICalificacion>({
  asignatura: {
    type: Schema.Types.ObjectId,
    ref: "Asignatura",
    required: true,
  },
  maestro: { type: Schema.Types.ObjectId, ref: "Maestro", required: true },
  periodo: { type: String, required: true },
  nota1: { type: Number, required: true },
  nota2: { type: Number, required: true },
  nota3: { type: Number, required: true },
  nota4: { type: Number, required: true },
  notaFinal: { type: Number, required: true },
  calificacion: { type: String, required: true },
  estatus: { type: String, required: true },
});

// Exportación del modelo
export const Calificacion = model<ICalificacion>(
  "Calificacion",
  CalificacionSchema
);
