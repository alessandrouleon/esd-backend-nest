import IUsersRepository from 'src/repositories/users/users.repository.cantract';
export declare class DeleteUsersService {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    remove(id: string): Promise<void>;
}
