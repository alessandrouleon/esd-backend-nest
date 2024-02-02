import { CreateLinesDto } from 'src/dtos/lines/create-lines.dto';
import ILinesRepository from 'src/repositories/lines/lines.repository.contract';
import { Lines } from 'src/entities/lines.entity';
export declare class CreateLinesService {
    private linesRepository;
    constructor(linesRepository: ILinesRepository);
    create(data: CreateLinesDto): Promise<Lines>;
}
