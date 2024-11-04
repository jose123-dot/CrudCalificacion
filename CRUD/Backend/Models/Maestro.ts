import { model, Schema, Types } from "mongoose";
import { IMaestro } from "../Interfaces/IMaestro";

const MaestroSchema = new Schema<IMaestro>({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  matricula: { type: String, required: true },
  tipoDocumento: { type: String, required: true },
  documento: { type: String, required: true },
  fechaNacimiento: { type: String, required: true },
  direccion: { type: String, required: true },
  sector: { type: String, required: true },
  ciudad: { type: String, required: true },
  asignatura: { type: Types.ObjectId, ref:'asignatura'},
  estatus: { type: String, required: true },
});

export const Maestro = model<IMaestro>("Maestro", MaestroSchema);
