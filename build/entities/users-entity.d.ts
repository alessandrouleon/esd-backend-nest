export declare class Users {
    id: string;
    userName: string;
    password: string;
    email: string;
    permission: string;
    employeeId: string;
    createdAt: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
    constructor(props: Omit<Users, 'id' | 'createdAt'>, id?: string);
}
