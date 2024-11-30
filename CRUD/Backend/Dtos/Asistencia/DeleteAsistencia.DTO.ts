import {  IsMongoId } from "class-validator";

export class DeleteAsistenciaDto {
  @IsMongoId()
  id?: any;

}
