import { CodeResponse } from "../Enums/CodeResponse";
import { ErrorHandler } from "../Errors/ErrorHandles";
import { IAsistencia } from "../Interfaces/IAsistencia";
import { Asistencia } from "../Models/Asistencia";

export class AsistenciaService {
  constructor() {}

  async createAsistencia(asistencia: IAsistencia): Promise<IAsistencia> {
    return await Asistencia.create(asistencia);
  }

  async getAsistenciaById(id: string): Promise<IAsistencia | null> {
    const asistencia = await Asistencia.findById(id);
    if (!asistencia) {
      throw new ErrorHandler(
        "No se encontro el Asistencia con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    return asistencia;
  }

  async getAllAsistencias(): Promise<IAsistencia[]> {
    const asistencias = await Asistencia.find();
    if (asistencias.length === 0) {
      throw new ErrorHandler(
        "No hay Asistencias registradas",
        CodeResponse.NOT_FOUND
      );
    }
    return asistencias;
  }

  async updateAsistencia(
    id: any,
    updatedAsistencia: IAsistencia
  ): Promise<IAsistencia | null> {
    const validateAsistencia = await Asistencia.findById(id);
    if (!validateAsistencia) {
      throw new ErrorHandler(
        "No se encontró la Asistencia con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    const asistencia = await Asistencia.findByIdAndUpdate(
      id,
      updatedAsistencia
    );
    return asistencia;
  }

  async deleteAsistencia(id: any): Promise<IAsistencia | null> {
    const validateAsistencia = await Asistencia.findById(id);
    if (!validateAsistencia) {
      throw new ErrorHandler(
        "No se encontró la Asistencia con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    //return await this.estudianteRepository.deleteAll();
    return await Asistencia.findByIdAndDelete(id);
  }
}
