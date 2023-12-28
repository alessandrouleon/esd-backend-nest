import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import ILinesRepository from 'src/repositories/lines/lines.repository.contract';
import { getUtcDate } from 'src/utils/date';

import { LineMessagesHelper } from 'src/utils/helprs/messages.helps';

@Injectable()
export class DeleteLinesService {
  constructor(
    @Inject('ILinesRepository')
    private linesRepository: ILinesRepository,
  ) {}

  public async remove(id: string): Promise<void> {
    const data = {} as UpdateLinesDto;
    const line = await this.linesRepository.findById(id);
    if (!line)
      throw new HttpException(
        LineMessagesHelper.ID_NOT_EXIST,
        HttpStatus.BAD_REQUEST,
      );

    await this.linesRepository.delete(id, {
      deletedAt: getUtcDate(),
      ...data,
    });
  }
}
