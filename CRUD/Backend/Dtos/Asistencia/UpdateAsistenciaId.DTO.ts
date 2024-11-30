import { IsMongoId } from "class-validator";

export class UpdateAsistenciaIdDto {
  @IsMongoId()
  id?: any;
}
