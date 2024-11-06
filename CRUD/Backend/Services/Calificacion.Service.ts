import { CodeResponse } from "../Enums/CodeResponse";
import { ErrorHandler } from "../Errors/ErrorHandles";
import { ICalificacion } from "../Interfaces/ICalificacion";
import { Calificacion } from "../Models/Calificacion";

export class CalificacionService {
  constructor() {}

  async createCalificacion(calificacion: ICalificacion): Promise<ICalificacion> {
    return await Calificacion.create(calificacion);
  }

  async getCalificacionById(id: string): Promise<ICalificacion | null> {
    const calificacion = await Calificacion.findById(id);
    if (!calificacion) {
      throw new ErrorHandler(
        "No se encontro el Calificacion con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    return calificacion;
  }

  async getAllCalificacions(): Promise<ICalificacion[]> {
    const Calificacions = await Calificacion.find();
    if (Calificacions.length === 0) {
      throw new ErrorHandler(
        "No hay Calificacions registradas",
        CodeResponse.NOT_FOUND
      );
    }
    return Calificacions;
  }

  async updateCalificacion(
    id: any,
    updatedCalificacion: ICalificacion
  ): Promise<ICalificacion | null> {
    const validateCalificacion = await Calificacion.findById(id);
    if (!validateCalificacion) {
      throw new ErrorHandler(
        "No se encontró la Calificacion con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    const calificacion = await Calificacion.findByIdAndUpdate(
      id,
      updatedCalificacion
    );
    return calificacion;
  }

  async deleteCalificacion(id: any): Promise<ICalificacion | null> {
    const validateCalificacion = await Calificacion.findById(id);
    if (!validateCalificacion) {
      throw new ErrorHandler(
        "No se encontró la Calificacion con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    //return await this.estudianteRepository.deleteAll();
    return await Calificacion.findByIdAndDelete(id);
  }
}
