import { CodeResponse } from "../Enums/CodeResponse";
import { ErrorHandler } from "../Errors/ErrorHandles";
import { IEstudiante } from "../Interfaces/IEstudiante";
import { Estudiante} from "../Models/Estudiante";

export class EstudianteService {
  

  constructor() {
    
  }

  async createEstudiante(estudiante: IEstudiante): Promise<IEstudiante> {
    return await Estudiante.create(estudiante);
  }

  async getEstudianteById(id: string): Promise<IEstudiante | null> {
    const estudiante = await Estudiante.findById(id);
    if (!estudiante) {
      throw new ErrorHandler(
        "No se encontro el estudiante con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    return estudiante;
  }

  async getAllEstudiantes(): Promise<IEstudiante[]> {
    const estudiantes = await Estudiante.find();
    if (estudiantes.length === 0) {
      throw new ErrorHandler(
        "No hay estudiantes registrados",
        CodeResponse.NOT_FOUND
      );
    }
    return estudiantes;
  }

  async updateEstudiante(id: any, updatedestudiante: IEstudiante): Promise<IEstudiante | null> {
    const validateestudiante = await Estudiante.findById(id);
    if (!validateestudiante) {
      throw new ErrorHandler(
        "No se encontró el estudiante con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    const estudiante = await Estudiante.findByIdAndUpdate(id, updatedestudiante);
    return estudiante;
  }

  async deleteEstudiante(id: any): Promise<IEstudiante | null> {
    const validateestudiante = await Estudiante.findById(id);
    if (!validateestudiante) {
      throw new ErrorHandler(
        "No se encontró el estudiante con el ID proporcionado",
        CodeResponse.NOT_FOUND
      );
    }
    //return await this.estudianteRepository.deleteAll();
    return await Estudiante.findByIdAndDelete(id);
  }
}
