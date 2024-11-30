import { IsMongoId } from "class-validator";

export class UpdateAsignaturaIdDto {
  @IsMongoId()
  id?: string;
}
