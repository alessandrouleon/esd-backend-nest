import ILinesRepository from 'src/repositories/lines/lines.repository.contract';
export declare class DeleteLinesService {
    private linesRepository;
    constructor(linesRepository: ILinesRepository);
    remove(id: string): Promise<void>;
}
