import { IsMongoId } from "class-validator";

export class UpdateEstudianteIDDto {
  @IsMongoId()
  id?: any;
}
