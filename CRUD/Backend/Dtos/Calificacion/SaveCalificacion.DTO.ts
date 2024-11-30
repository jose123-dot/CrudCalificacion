import {IsString, IsNotEmpty, IsNumber} from "class-validator";

export class SaveCalificacionDto {
  @IsNotEmpty()
  asignatura: any; 

  @IsNotEmpty()
  maestro: any; 

  @IsString()
  @IsNotEmpty()
  periodo?: string;

  @IsNumber()
  @IsNotEmpty()
  nota1?: number;

  @IsNumber()
  @IsNotEmpty()
  nota2?: number;

  @IsNumber()
  @IsNotEmpty()
  nota3?: number;

  @IsNumber()
  @IsNotEmpty()
  nota4?: number;

  @IsNumber()
  @IsNotEmpty()
  notaFinal?: number;

  @IsString()
  @IsNotEmpty()
  calificacion?: string;

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}