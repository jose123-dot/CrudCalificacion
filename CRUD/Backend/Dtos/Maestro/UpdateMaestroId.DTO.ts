import { IsMongoId } from "class-validator";

export class UpdateMaestroIdDto {
  @IsMongoId()
  id?: any;
}
