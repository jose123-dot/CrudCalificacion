import {  IsMongoId } from "class-validator";

export class DeleteAsignaturaDto {
  @IsMongoId()
  id?: any;

}
