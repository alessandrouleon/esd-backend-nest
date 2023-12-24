import { Module } from '@nestjs/common';
import { ListsLinesService } from '../services/lines/lists.lines.service';
import { LinesController } from '../controllers/lines.controller';
import { LinesRepository } from 'src/repositories/lines/lines.repository';
import { UpdateLinesService } from 'src/services/lines/update.lines.service';
import { CreateLinesService } from 'src/services/lines/create.lines.service';
import { DeleteLinesService } from 'src/services/lines/delete.lines.service';

@Module({
  controllers: [LinesController],
  exports: [
    CreateLinesService,
    UpdateLinesService,
    DeleteLinesService,
    ListsLinesService,
  ],
  providers: [
    CreateLinesService,
    UpdateLinesService,
    DeleteLinesService,
    ListsLinesService,
    {
      provide: 'ILinesRepository',
      useClass: LinesRepository,
    },
  ],
})
export class LinesModule {}
