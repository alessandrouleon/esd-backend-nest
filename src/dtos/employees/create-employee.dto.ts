import { IsString, Matches } from 'class-validator';
import { EmployeeMessagesHelper } from 'src/utils/helprs/messages.helps';

export class CreateEmployeeDto {
  id?: string;
  @IsString()
  @Matches(/\S/, { message: EmployeeMessagesHelper.EMPTY_NAME })
  name: string;

  @IsString()
  @Matches(/\S/, { message: EmployeeMessagesHelper.EMPTY_REGISTRATION })
  registration: string;

  @IsString()
  @Matches(/\S/, { message: EmployeeMessagesHelper.EMPTY_DEPARTMENT })
  department: string;

  @IsString()
  @Matches(/\S/, { message: EmployeeMessagesHelper.EMPTY_SHIFT })
  shift: string;

  @IsString()
  @Matches(/\S/, { message: EmployeeMessagesHelper.EMPTY_SHIFT })
  linesId: string;

  updatedAt: Date;
  deletedAt: Date;
}
