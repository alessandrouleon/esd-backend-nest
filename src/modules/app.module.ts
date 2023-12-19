import { Module } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LinesModule } from './lines.module';

@Module({
  imports: [LinesModule, PrismaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
