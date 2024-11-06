import { CodeResponse } from "../Enums/CodeResponse";
import { ErrorHandler } from "../Errors/ErrorHandles";
import { IAsignatura } from "../Interfaces/IAsignatura";
import { Asignatura } from "../Models/Asignatura";

export class AsignaturaService {
  constructor() {}

  async createAsignatura(asignatura: IAsignatura): Promise<IAsignatura> {
    return await Asignatura.create(asignatura);
  }

  async getAsignaturaById(id: string): Promise<IAsignatura | null> {
    const asignatura = await Asignatura.findById(id);
    if (!asignatura) {
      throw new ErrorHandler(
        "No se encontro el Asignatura con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    return asignatura;
  }

  async getAllAsignaturas(): Promise<IAsignatura[]> {
    const asignaturas = await Asignatura.find();
    if (asignaturas.length === 0) {
      throw new ErrorHandler(
        "No hay asignaturas registradas",
        CodeResponse.NOT_FOUND
      );
    }
    return asignaturas;
  }

  async updateAsignatura(
    id: any,
    updatedasignatura: IAsignatura
  ): Promise<IAsignatura | null> {
    const validateasignatura = await Asignatura.findById(id);
    if (!validateasignatura) {
      throw new ErrorHandler(
        "No se encontró la Asignatura con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    const asignatura = await Asignatura.findByIdAndUpdate(
      id,
      updatedasignatura
    );
    return asignatura;
  }

  async deleteAsignatura(id: any): Promise<IAsignatura | null> {
    const validateasignatura = await Asignatura.findById(id);
    if (!validateasignatura) {
      throw new ErrorHandler(
        "No se encontró la Asignatura con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    //return await this.estudianteRepository.deleteAll();
    return await Asignatura.findByIdAndDelete(id);
  }
}
