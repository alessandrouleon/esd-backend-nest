import { IsString, Matches } from 'class-validator';
import { LineMessagesHelper } from 'src/utils/helprs/messages.helps';

export class CreateLinesDto {
  @IsString()
  @Matches(/\S/, { message: LineMessagesHelper.EMPTY_CODE })
  code: string;

  @IsString()
  @Matches(/\S/, { message: LineMessagesHelper.EMPTY_DESCRIPTION })
  description: string;

  @IsString()
  @Matches(/\S/, { message: LineMessagesHelper.EMPTY_STAGE })
  stage?: string;

  updatedAt: Date;

  deletedAt: Date;
}
