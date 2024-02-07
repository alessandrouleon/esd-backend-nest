import { IsString, Matches } from 'class-validator';
import { RolesMessagesHelper } from 'src/utils/helprs/messages.helps';

export class CreateRolesDto {
  id?: string;
  @IsString()
  @Matches(/\S/, { message: RolesMessagesHelper.EMPTY_NAME })
  name: string;

  @IsString()
  @Matches(/\S/, { message: RolesMessagesHelper.EMPTY_PERMISSION })
  permissions: string;

  updatedAt: Date;
  deletedAt: Date;
}
