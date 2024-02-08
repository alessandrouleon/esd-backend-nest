import { IsString, Matches } from 'class-validator';
import { UsersMessagesHelper } from 'src/utils/helprs/messages.helps';
import { RegExHelper } from 'src/utils/helprs/regex.helprs';

export class CreateUsersDto {
  id?: string;
  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_USERNAME })
  userName: string;

  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_PASSWORD })
  @Matches(RegExHelper.password, {
    message: UsersMessagesHelper.PASSWORD_VALID,
  })
  password: string;

  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_EMAIL })
  @Matches(RegExHelper.emailFormat, {
    message: UsersMessagesHelper.NOT_TYPE_EMAIL,
  })
  email: string;

  @IsString()
  @Matches(/\S/, { message: UsersMessagesHelper.EMPTY_EMPLOYEE_ID })
  employeeId: string;

  updatedAt: Date;

  deletedAt: Date;
}
