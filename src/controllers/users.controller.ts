import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { CreateUsersService } from 'src/services/users/create.users.service';
import { DeleteUsersService } from 'src/services/users/delete.users.service';
import { UpdateUsersService } from 'src/services/users/update.users.service';

@Controller('users')
export class UsersControllers {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly updateUsersService: UpdateUsersService,
    private readonly deleteUsersService: DeleteUsersService,
  ) {}

  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.createUsersService.create(createUsersDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.updateUsersService.update(id, updateUsersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUsersService.remove(id);
  }
}
