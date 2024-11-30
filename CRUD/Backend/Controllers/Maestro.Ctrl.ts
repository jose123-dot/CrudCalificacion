import { NextFunction, Request, Response } from "express";
import { MaestroService } from "../Services/Maestro.Service";
import { SaveMaestroDto} from "../Dtos/Maestro/SaveMaestro.DTO";
import { validateRequestSchema } from "../Decorators/ValidateRequestSchema";
import { UdpateMaestroDto } from "../Dtos/Maestro/UpdateMaestro.DTO";
import { UpdateMaestroIdDto } from "../Dtos/Maestro/UpdateMaestroId.DTO";
import { DeleteMaestroDto } from "../Dtos/Maestro/DeleteMaestro.DTO";
import { IMaestro } from "../Interfaces/IMaestro";
import { ErrorHandler } from "../Errors/ErrorHandles";

export class MaestroController {
  private MaestroService: MaestroService;

  constructor() {
    this.MaestroService = new MaestroService();
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const Maestros = await this.MaestroService.getAllMaestros();
      res
        .status(200)
        .json({ ok: true, message: "Get All Maestros", data: Maestros });
    } catch (error: any) {
      next(error);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const MaestroId: string = req.params.id;

    try {
      const Maestro = await this.MaestroService.getMaestroById(MaestroId);
      res
        .status(200)
        .json({ message: `Get Maestro by ID ${MaestroId}`, data: Maestro });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(SaveMaestroDto)
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const MaestroData: IMaestro = req.body;

    try {
      const newMaestro = await this.MaestroService.createMaestro(MaestroData);
      res
        .status(201)
        .json({ ok: true, message: "Maestro created", data: newMaestro });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(UdpateMaestroDto, UpdateMaestroIdDto)
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const MaestroId = req.query.id;
    const MaestroData = req.body;

    try {
      const MaestroActualizada = await this.MaestroService.updateMaestro(
        MaestroId,
        MaestroData
      );
      res
        .status(200)
        .json({
          ok: true,
          message: `Actualizar Maestro con ID ${MaestroId}`,
          data: MaestroActualizada,
        });
    } catch (error: any) {
      next(error);
    }
  }

  @validateRequestSchema(undefined, DeleteMaestroDto)
  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const MaestroId = req.query.id;

    try {
      await this.MaestroService.deleteMaestro(MaestroId);
      res
        .status(200)
        .json({ ok: true, message: `Delete Maestro with ID ${MaestroId}` });
    } catch (error: any) {
      next(error);
    }
  }
}

export default MaestroController;
