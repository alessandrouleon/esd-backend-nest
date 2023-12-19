import { PartialType } from '@nestjs/mapped-types';
import { CreateLinesDto } from './create-lines.dto';

export class UpdateLinesDto extends PartialType(CreateLinesDto) {}
