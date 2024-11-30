import { NextFunction, Request, Response } from "express";
import { AsignaturaService } from "../Services/Asignatura.Service";
import { SaveAsignaturaDto} from "../Dtos/Asignatura/SaveAsignatura.DTO";
import { validateRequestSchema } from "../Decorators/ValidateRequestSchema";
import { UdpateAsignaturaDto} from "../Dtos/Asignatura/UpdateAsignatura.DTO";
import { UpdateAsignaturaIdDto } from "../Dtos/Asignatura/UpdateAsignaturaIdDTO";
import { DeleteAsignaturaDto } from "../Dtos/Asignatura/DeleteAsignatura.DTO";
import { IAsignatura } from "../Interfaces/IAsignatura";
import { ErrorHandler } from "../Errors/ErrorHandles";
import { UpdateEstudianteIDDto } from "../Dtos/estudiante/UpdateEstudianteID.DTO";

export class AsignaturaController {
  private AsignaturaService: AsignaturaService;

  constructor() {
    this.AsignaturaService = new AsignaturaService();
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const Asignaturas = await this.AsignaturaService.getAllAsignaturas();
      res
        .status(200)
        .json({ ok: true, message: "Get All Asignaturas", data: Asignaturas });
    } catch (error: any) {
      next(error);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsignaturaId: string = req.params.id;

    try {
      const Asignatura = await this.AsignaturaService.getAsignaturaById(AsignaturaId);
      res
        .status(200)
        .json({ message: `Get Asignatura by ID ${AsignaturaId}`, data: Asignatura });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(SaveAsignaturaDto)
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsignaturaData: IAsignatura = req.body;

    try {
      const newAsignatura = await this.AsignaturaService.createAsignatura(AsignaturaData);
      res
        .status(201)
        .json({ ok: true, message: "Asignatura created", data: newAsignatura });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(UdpateAsignaturaDto, UpdateEstudianteIDDto)
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsignaturaId = req.query.id;
    const AsignaturaData = req.body;

    try {
      const AsignaturaActualizada = await this.AsignaturaService.updateAsignatura(
        AsignaturaId,
        AsignaturaData
      );
      res
        .status(200)
        .json({
          ok: true,
          message: `Actualizar Asignatura con ID ${AsignaturaId}`,
          data: AsignaturaActualizada,
        });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(undefined, DeleteAsignaturaDto)
  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const AsignaturaId = req.query.id;

    try {
      await this.AsignaturaService.deleteAsignatura(AsignaturaId);
      res
        .status(200)
        .json({ ok: true, message: `Delete Asignatura with ID ${AsignaturaId}` });
    } catch (error: any) {
      next(error);
    }
  }
}

export default AsignaturaController;
