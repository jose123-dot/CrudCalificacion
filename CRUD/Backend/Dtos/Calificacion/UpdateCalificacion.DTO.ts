import { IsString,  IsNotEmpty, IsMongoId, IsNumber } from "class-validator";

export class UpdateEstudianteDto {

 
  @IsNotEmpty()
  maestro?: string;

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
