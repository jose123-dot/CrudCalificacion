import {  IsMongoId } from "class-validator";

export class DeleteMaestroDto {
  @IsMongoId()
  id?: any;

}
