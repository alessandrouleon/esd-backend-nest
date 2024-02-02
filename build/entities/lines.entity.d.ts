export declare class Lines {
    id: string;
    code: string;
    description: string;
    stage?: string;
    createdAt: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
    constructor(props: Omit<Lines, 'id' | 'createdAt'>, id?: string);
}
