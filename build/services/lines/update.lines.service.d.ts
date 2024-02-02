import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import ILinesRepository from 'src/repositories/lines/lines.repository.contract';
import { Lines } from 'src/entities/lines.entity';
export declare class UpdateLinesService {
    private linesRepository;
    constructor(linesRepository: ILinesRepository);
    update(id: string, data: UpdateLinesDto): Promise<Lines>;
    private validateCode;
    private validateDescription;
    private handleUpdateError;
}
