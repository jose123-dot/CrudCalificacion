import {  IsMongoId } from "class-validator";

export class DeleteCalificacionDto {
  @IsMongoId()
  id?: any;

}
