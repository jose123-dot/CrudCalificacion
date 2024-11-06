import { IsString,  IsNotEmpty, IsMongoId } from "class-validator";

export class UdpateAsignaturaDto {


  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}
