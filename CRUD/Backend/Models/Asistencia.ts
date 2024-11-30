import { Schema, model, Document } from "mongoose";
import { IAsistencia } from "../Interfaces/IAsistencia";


const AsistenciaSchema = new Schema<IAsistencia>({
  periodo: { type: String, required: true },
  maestro: { type: Schema.Types.ObjectId, ref: "Maestro", required: true },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: "Estudiante",
    required: true,
  },
  estatus: { type: String, required: true },
});

// Exportación del modelo
export const Asistencia = model<IAsistencia>("Asistencia", AsistenciaSchema);