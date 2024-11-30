import { CodeResponse } from "../Enums/CodeResponse";
import { ErrorHandler } from "../Errors/ErrorHandles";
import { IMaestro } from "../Interfaces/IMaestro";
import { Maestro } from "../Models/Maestro";

export class MaestroService {
  constructor() {}

  async createMaestro(maestro: IMaestro): Promise<IMaestro> {
    return await Maestro.create(maestro);
  }

  async getMaestroById(id: string): Promise<IMaestro | null> {
    const maestro = await Maestro.findById(id);
    if (!maestro) {
      throw new ErrorHandler(
        "No se encontro el Maestro con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    return maestro;
  }

  async getAllMaestros(): Promise<IMaestro[]> {
    const Maestros = await Maestro.find();
    if (Maestros.length === 0) {
      throw new ErrorHandler(
        "No hay Maestros registrados",
        CodeResponse.NOT_FOUND
      );
    }
    return Maestros;
  }

  async updateMaestro(
    id: any,
    updatedMaestro: IMaestro
  ): Promise<IMaestro | null> {
    const validateMaestro = await Maestro.findById(id);
    if (!validateMaestro) {
      throw new ErrorHandler(
        "No se encontró el Maestro con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    const maestro = await Maestro.findByIdAndUpdate(
      id,
      updatedMaestro
    );
    return maestro;
  }

  async deleteMaestro(id: any): Promise<IMaestro | null> {
    const validateMaestro = await Maestro.findById(id);
    if (!validateMaestro) {
      throw new ErrorHandler(
        "No se encontró el Maestro con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    //return await this.MaestroRepository.deleteAll();
    return await Maestro.findByIdAndDelete(id);
  }
}
