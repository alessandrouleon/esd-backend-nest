import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  Get,
} from '@nestjs/common';
import { ListsLinesService } from '../services/lines/lists.lines.service';
import { CreateLinesDto } from '../dtos/lines/create-lines.dto';
import { UpdateLinesDto } from '../dtos/lines/update-lines.dto';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
import { UpdateLinesService } from 'src/services/lines/update.lines.service';
import { CreateLinesService } from 'src/services/lines/create.lines.service';
import { DeleteLinesService } from 'src/services/lines/delete.lines.service';
import { ISearchLineValue } from 'src/repositories/lines/lines.repository.contract';

@Controller('lines')
export class LinesController {
  constructor(
    private readonly listsLinesService: ListsLinesService,
    private readonly createLinesService: CreateLinesService,
    private readonly updateLinesService: UpdateLinesService,
    private readonly deleteLinesService: DeleteLinesService,
  ) {}

  @Post()
  create(@Body() createLinesDto: CreateLinesDto) {
    return this.createLinesService.create(createLinesDto);
  }

  @Get('search')
  async findValueSearch(@Query() unifiedValue: ISearchLineValue) {
    return this.listsLinesService.findByUnifiedValueSearch(unifiedValue);
  }

  @Get()
  async findAll(@Query() page: any): Promise<any> {
    return this.listsLinesService.findAll(page);
  }

  @Post('search/:page?')
  @HttpCode(200)
  async findBySearch(
    @Param('page') page: number,
    @Body() search: SearchFilterTable,
  ) {
    return this.listsLinesService.getLines(search, page);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateLinesDto: UpdateLinesDto) {
    return this.updateLinesService.update(id, updateLinesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteLinesService.remove(id);
  }
}
