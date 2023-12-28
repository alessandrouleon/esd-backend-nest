import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { LinesModule } from './lines.module';
import { EmployeesModule } from './employee.module';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule, EmployeesModule, LinesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
