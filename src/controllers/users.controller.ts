import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { ISearchUsersValue } from 'src/repositories/users/users.repository.cantract';
import { CreateUsersService } from 'src/services/users/create.users.service';
import { DeleteUsersService } from 'src/services/users/delete.users.service';
import { ListsUsersService } from 'src/services/users/lists.users.service';
import { UpdateUsersService } from 'src/services/users/update.users.service';
import { SearchFilterTable } from 'src/utils/helprs/search-table';

@Controller('users')
export class UsersControllers {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly updateUsersService: UpdateUsersService,
    private readonly deleteUsersService: DeleteUsersService,
    private readonly listUsersService: ListsUsersService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.createUsersService.create(createUsersDto);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.updateUsersService.update(id, updateUsersDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUsersService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Get('search')
  async findValueSearch(@Query() unifiedValue: ISearchUsersValue) {
    return this.listUsersService.findByUnifiedValueSearch(unifiedValue);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<any> {
    return this.listUsersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('/search/:page')
  @HttpCode(200)
  async findBySearch(
    @Param('page') page: number,
    @Body() search: SearchFilterTable,
  ) {
    return this.listUsersService.gerUsers(search, page);
  }
}
