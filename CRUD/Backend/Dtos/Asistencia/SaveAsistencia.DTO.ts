import {IsString, IsNotEmpty, } from "class-validator";

export class SaveAsistenciaDto {
  @IsString()
  @IsNotEmpty()
  periodo?: string;

  @IsNotEmpty()
  maestro: any; // Puedes ajustar el tipo de dato según el tipo de ID que uses para `maestro`.

  @IsNotEmpty()
  estudiante: any; // Puedes ajustar el tipo de dato según el tipo de ID que uses para `estudiante`.

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}