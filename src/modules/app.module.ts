import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { LinesModule } from './lines.module';
import { EmployeesModule } from './employee.module';

@Module({
  imports: [EmployeesModule, LinesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
