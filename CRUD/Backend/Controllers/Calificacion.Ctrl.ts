import { NextFunction, Request, Response } from "express";
import { CalificacionService } from "../Services/Calificacion.Service";
import { SaveCalificacionDto} from "../Dtos/Calificacion/SaveCalificacion.DTO";
import { validateRequestSchema } from "../Decorators/ValidateRequestSchema";
import { UpdateCalificacionIdDto } from "../Dtos/Calificacion/UpdateCalificacionId.DTO";
import { UpdateEstudianteDto } from "../Dtos/Calificacion/UpdateCalificacion.DTO";
import { DeleteCalificacionDto } from "../Dtos/Calificacion/DeleteCalificacion.DTO";
import { ICalificacion } from "../Interfaces/ICalificacion";
import { ErrorHandler } from "../Errors/ErrorHandles";

export class CalificacionController {
  private CalificacionService: CalificacionService;

  constructor() {
    this.CalificacionService = new CalificacionService();
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const Calificacions = await this.CalificacionService.getAllCalificacions();
      res
        .status(200)
        .json({ ok: true, message: "Get All Calificacions", data: Calificacions });
    } catch (error: any) {
      next(error);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const CalificacionId: string = req.params.id;

    try {
      const Calificacion = await this.CalificacionService.getCalificacionById(CalificacionId);
      res
        .status(200)
        .json({ message: `Get Calificacion by ID ${CalificacionId}`, data: Calificacion });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(SaveCalificacionDto)
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const CalificacionData: ICalificacion = req.body;

    try {
      const newCalificacion = await this.CalificacionService.createCalificacion(CalificacionData);
      res
        .status(201)
        .json({ ok: true, message: "Calificacion created", data: newCalificacion });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(UpdateCalificacionIdDto, UpdateCalificacionIdDto)
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const CalificacionId = req.query.id;
    const CalificacionData = req.body;

    try {
      const CalificacionActualizada = await this.CalificacionService.updateCalificacion(
        CalificacionId,
        CalificacionData
      );
      res
        .status(200)
        .json({
          ok: true,
          message: `Actualizar Calificacion con ID ${CalificacionId}`,
          data: CalificacionActualizada,
        });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(undefined, DeleteCalificacionDto)
  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const CalificacionId = req.query.id;

    try {
      await this.CalificacionService.deleteCalificacion(CalificacionId);
      res
        .status(200)
        .json({ ok: true, message: `Delete Calificacion with ID ${CalificacionId}` });
    } catch (error: any) {
      next(error);
    }
  }
}

export default CalificacionController;
