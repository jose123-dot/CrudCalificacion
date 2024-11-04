import { IsString,  IsNotEmpty } from "class-validator";

export class SaveAsignaturaDto {
 

  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}
