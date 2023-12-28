import { IsString, Matches } from 'class-validator';
import { UsersMessagesHelper } from 'src/utils/helprs/messages.helps';

export class CreateUsersDto {
  id?: string;
  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_USERNAME })
  userName: string;

  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_PASSWORD })
  password: string;

  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_EMAIL })
  email: string;

  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_PERMISSION })
  permission: string;

  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_EMPLOYEE_ID })
  employeeId: string;

  updatedAt: Date;

  deletedAt: Date;
}
