import { IsString,  IsNotEmpty } from "class-validator";

export class SaveMaestroDto {
 

  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  apellido?: string;

  @IsString()
  @IsNotEmpty()
  matricula?: string;

  @IsString()
  @IsNotEmpty()
  tipoDocumento?: string;

  @IsString()
  @IsNotEmpty()
  documento?: string;

  @IsString()
  @IsNotEmpty()
  fechaNacimiento?: string;

  @IsString()
  @IsNotEmpty()
  direccion?: string;

  @IsString()
  @IsNotEmpty()
  sector?: string;

  @IsString()
  @IsNotEmpty()
  ciudad?: string;

  @IsNotEmpty()
  asignatura: any; // Puedes ajustar el tipo de dato según el tipo de ID que uses para `asignatura`.

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}
