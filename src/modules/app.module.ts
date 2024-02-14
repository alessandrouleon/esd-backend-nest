import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { LinesModule } from './lines.module';
import { EmployeesModule } from './employee.module';
import { UsersModule } from './users.module';
import { AppService } from 'src/app.service';
import { GoogleStrategy } from 'src/googleStrategy';
import { AppController } from 'src/app.controllers';

@Module({
  imports: [UsersModule, EmployeesModule, LinesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
