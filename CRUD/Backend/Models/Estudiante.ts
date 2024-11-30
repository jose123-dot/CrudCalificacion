import {model, Schema} from 'mongoose';
import { IEstudiante } from '../Interfaces/IEstudiante';

const EstudianteSchema = new Schema<IEstudiante>({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  matricula: { type: String, required: true },
  tipoDocumento: { type: String, required: true },
  documento: { type: String, required: true },
  fechaNacimiento: { type: String, required: true },
  direccion: { type: String, required: true },
  sector: { type: String, required: true },
  ciudad: { type: String, required: true },
  estatus: { type: String, required: true },
});

export const Estudiante = model<IEstudiante>("Estudiante", EstudianteSchema);