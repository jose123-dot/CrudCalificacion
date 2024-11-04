import {IsString, IsNotEmpty, } from "class-validator";

export class SaveEstudianteDto {
  

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

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}