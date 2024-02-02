export declare class Employees {
    id: string;
    name: string;
    registration: string;
    department: string;
    shift: string;
    linesId: string;
    createdAt: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
    constructor(props: Omit<Employees, 'id' | 'createdAt'>, id?: string);
}
