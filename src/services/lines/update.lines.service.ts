import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import ILinesRepository from 'src/repositories/lines/lines.repository.contract';
import { Lines } from 'src/entities/lines.entity';
import {
  LineMessagesHelper,
  MessageHelps,
} from 'src/utils/helprs/messages.helps';

@Injectable()
export class UpdateLinesService {
  constructor(
    @Inject('ILinesRepository')
    private linesRepository: ILinesRepository,
  ) {}

  public async update(id: string, data: UpdateLinesDto): Promise<Lines> {
    try {
      const lines = await this.linesRepository.findById(id);
      if (!lines) {
        throw new HttpException(
          LineMessagesHelper.ID_NOT_EXIST,
          HttpStatus.NOT_FOUND,
        );
      }

      await Promise.all([
        this.validateCode(data.code, lines.code),
        this.validateDescription(data.description, lines.description),
      ]);

      return this.linesRepository.update(id, {
        updatedAt: new Date(),
        ...data,
      });
    } catch (error) {
      this.handleUpdateError(error);
    }
  }

  private async validateCode(
    newCode: string,
    existingCode: string,
  ): Promise<void> {
    if (newCode && newCode !== existingCode) {
      const existCode = await this.linesRepository.findByCode(newCode);
      if (existCode) {
        throw new HttpException(
          LineMessagesHelper.EXIST_CODE,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private async validateDescription(
    newDescription: string,
    existingDescription: string,
  ): Promise<void> {
    if (newDescription && newDescription !== existingDescription) {
      const existDescription =
        await this.linesRepository.findByDescription(newDescription);
      if (existDescription) {
        throw new HttpException(
          LineMessagesHelper.EXIST_DESCRIPTION,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private handleUpdateError(error: any): never {
    if (error instanceof HttpException) {
      throw error;
    } else {
      throw new HttpException(
        MessageHelps.INTERNAL_SERVER,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
