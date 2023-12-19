import { Module } from '@nestjs/common';
import { LinesService } from '../services/lines/lines.service';
import { LinesController } from '../controllers/lines.controller';
import { LinesRepository } from 'src/repositories/lines/lines.repository';

@Module({
  controllers: [LinesController],
  exports: [LinesService],
  providers: [
    LinesService,
    {
      provide: 'ILinesRepository',
      useClass: LinesRepository,
    },
  ],
})
export class LinesModule {}
