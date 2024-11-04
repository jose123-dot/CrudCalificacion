import {  IsMongoId } from "class-validator";

export class DeleteEstudianteDto {
  @IsMongoId()
  id?: any;

}
