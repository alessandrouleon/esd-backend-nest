import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateLinesDto } from 'src/dtos/lines/create-lines.dto';
import ILinesRepository from 'src/repositories/lines/lines.repository.contract';
import { Lines } from 'src/entities/lines.entity';
import { LineMessagesHelper } from 'src/utils/helprs/messages.helps';

@Injectable()
export class CreateLinesService {
  constructor(
    @Inject('ILinesRepository')
    private linesRepository: ILinesRepository,
  ) {}

  async create(data: CreateLinesDto): Promise<Lines> {
    const [existCode, existDescription] = await Promise.all([
      this.linesRepository.findByCode(data.code),
      this.linesRepository.findByDescription(data.description),
    ]);

    if (existCode)
      throw new HttpException(
        LineMessagesHelper.EXIST_CODE,
        HttpStatus.BAD_REQUEST,
      );

    if (existDescription)
      throw new HttpException(
        LineMessagesHelper.EXIST_DESCRIPTION,
        HttpStatus.BAD_REQUEST,
      );

    return this.linesRepository.create(data);
  }
}
