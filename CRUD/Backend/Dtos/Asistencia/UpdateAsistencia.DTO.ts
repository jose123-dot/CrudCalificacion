import { IsString,  IsNotEmpty, IsMongoId } from "class-validator";

export class UpdateAsistenciaDto {
  @IsMongoId()
  id?: any;

  @IsString()
  @IsNotEmpty()
  periodo?: string;

  @IsNotEmpty()
  maestro: any; 

  @IsNotEmpty()
  estudiante: any; 

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}
