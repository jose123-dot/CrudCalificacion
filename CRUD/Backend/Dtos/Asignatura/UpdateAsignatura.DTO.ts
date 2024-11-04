import { IsString,  IsNotEmpty, IsMongoId } from "class-validator";

export class UdpateAsignaturaDto {
  @IsMongoId()
  id?: any;

  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  estatus?: string;
}
