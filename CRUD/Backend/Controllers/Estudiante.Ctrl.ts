import { NextFunction, Request, Response } from "express";
import { EstudianteService } from "../Services/Estudiante.Service";
import { SaveEstudianteDto} from "../Dtos/estudiante/SaveEstudiante.DTO";
import { validateRequestSchema } from "../Decorators/ValidateRequestSchema";
import { UpdateEstudianteDto } from "../Dtos/estudiante/UpdateEstudiante.DTO";
import { UpdateEstudianteIDDto } from "../Dtos/estudiante/UpdateEstudianteID.DTO";
import { DeleteEstudianteDto } from "../Dtos/estudiante/DeleteEstudiante.DTO";
import { IEstudiante } from "../Interfaces/IEstudiante";
import { ErrorHandler } from "../Errors/ErrorHandles";

export class EstudianteController {
  private EstudianteService: EstudianteService;

  constructor() {
    this.EstudianteService = new EstudianteService();
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const Estudiantes = await this.EstudianteService.getAllEstudiantes();
      res
        .status(200)
        .json({ ok: true, message: "Get All Estudiantes", data: Estudiantes });
    } catch (error: any) {
      next(error);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const EstudianteId: string = req.params.id;

    try {
      const Estudiante = await this.EstudianteService.getEstudianteById(EstudianteId);
      res
        .status(200)
        .json({ message: `Get Estudiante by ID ${EstudianteId}`, data: Estudiante });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(SaveEstudianteDto)
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const EstudianteData: IEstudiante = req.body;

    try {
      const newEstudiante = await this.EstudianteService.createEstudiante(EstudianteData);
      res
        .status(201)
        .json({ ok: true, message: "Estudiante created", data: newEstudiante });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(UpdateEstudianteDto, UpdateEstudianteIDDto)
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const EstudianteId = req.query.id;
    const EstudianteData = req.body;

    try {
      const EstudianteActualizada = await this.EstudianteService.updateEstudiante(
        EstudianteId,
        EstudianteData
      );
      res
        .status(200)
        .json({
          ok: true,
          message: `Actualizar Estudiante con ID ${EstudianteId}`,
          data: EstudianteActualizada,
        });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(undefined, DeleteEstudianteDto)
  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const EstudianteId = req.query.id;

    try {
      await this.EstudianteService.deleteEstudiante(EstudianteId);
      res
        .status(200)
        .json({ ok: true, message: `Delete Estudiante with ID ${EstudianteId}` });
    } catch (error: any) {
      next(error);
    }
  }
}

export default EstudianteController;
