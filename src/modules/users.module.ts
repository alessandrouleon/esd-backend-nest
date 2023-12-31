import { Module } from '@nestjs/common';
import { UsersControllers } from 'src/controllers/users.controller';
import { UsersRepository } from 'src/repositories/users/users.repository';
import { CreateUsersService } from 'src/services/users/create.users.service';
import { DeleteUsersService } from 'src/services/users/delete.users.service';
import { UpdateUsersService } from 'src/services/users/update.users.service';

@Module({
  controllers: [UsersControllers],
  exports: [CreateUsersService, UpdateUsersService, DeleteUsersService],
  providers: [
    CreateUsersService,
    UpdateUsersService,
    DeleteUsersService,
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
  ],
})
export class UsersModule {}
