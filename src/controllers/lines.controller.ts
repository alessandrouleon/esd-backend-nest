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
import { LinesService } from '../services/lines/lines.service';
import { CreateLinesDto } from '../dtos/lines/create-lines.dto';
import { UpdateLinesDto } from '../dtos/lines/update-lines.dto';
import { SearchFilterTable } from 'src/utils/helprs/search-table';

@Controller('lines')
export class LinesController {
  constructor(private readonly linesService: LinesService) {}

  @Post()
  create(@Body() createLinesDto: CreateLinesDto) {
    return this.linesService.create(createLinesDto);
  }

  @Get()
  async findAll(@Query() page: any): Promise<any> {
    return this.linesService.findAll(page);
  }

  @Post('search/:page?')
  @HttpCode(200)
  async findBySearch(
    @Param('page') page: number,
    @Body() search: SearchFilterTable,
  ) {
    return this.linesService.getLines(search, page);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.linesService.findOne(id);
  // }
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateLinesDto: UpdateLinesDto) {
    return this.linesService.update(id, updateLinesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linesService.remove(id);
  }
}
