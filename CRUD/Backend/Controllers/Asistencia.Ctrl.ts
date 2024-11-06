import { NextFunction, Request, Response } from "express";
import { AsistenciaService } from "../Services/Asistencia.Service";
import { SaveAsistenciaDto} from "../Dtos/Asistencia/SaveAsistencia.DTO";
import { validateRequestSchema } from "../Decorators/ValidateRequestSchema";
import {UpdateAsistenciaIdDto } from "../Dtos/Asistencia/UpdateAsistenciaId.DTO";
import { DeleteAsistenciaDto } from "../Dtos/Asistencia/DeleteAsistencia.DTO";
import { IAsistencia } from "../Interfaces/IAsistencia";
import { ErrorHandler } from "../Errors/ErrorHandles";
import { UpdateAsistenciaDto } from "../Dtos/Asistencia/UpdateAsistencia.DTO";

export class AsistenciaController {
  private AsistenciaService: AsistenciaService;

  constructor() {
    this.AsistenciaService = new AsistenciaService();
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const Asistencias = await this.AsistenciaService.getAllAsistencias();
      res
        .status(200)
        .json({ ok: true, message: "Get All Asistencias", data: Asistencias });
    } catch (error: any) {
      next(error);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsistenciaId: string = req.params.id;

    try {
      const Asistencia = await this.AsistenciaService.getAsistenciaById(AsistenciaId);
      res
        .status(200)
        .json({ message: `Get Asistencia by ID ${AsistenciaId}`, data: Asistencia });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(SaveAsistenciaDto)
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsistenciaData: IAsistencia = req.body;

    try {
      const newAsistencia = await this.AsistenciaService.createAsistencia(AsistenciaData);
      res
        .status(201)
        .json({ ok: true, message: "Asistencia created", data: newAsistencia });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(UpdateAsistenciaDto, UpdateAsistenciaIdDto)
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsistenciaId = req.query.id;
    const AsistenciaData = req.body;

    try {
      const AsistenciaActualizada = await this.AsistenciaService.updateAsistencia(
        AsistenciaId,
        AsistenciaData
      );
      res
        .status(200)
        .json({
          ok: true,
          message: `Actualizar Asistencia con ID ${AsistenciaId}`,
          data: AsistenciaActualizada,
        });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(undefined, DeleteAsistenciaDto)
  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsistenciaId = req.query.id;

    try {
      await this.AsistenciaService.deleteAsistencia(AsistenciaId);
      res
        .status(200)
        .json({ ok: true, message: `Delete Asistencia with ID ${AsistenciaId}` });
    } catch (error: any) {
      next(error);
    }
  }
}

export default AsistenciaController;
