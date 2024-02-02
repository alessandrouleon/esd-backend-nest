import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { Users } from 'src/entities/users-entity';
import IUsersRepository from 'src/repositories/users/users.repository.cantract';
export declare class CreateUsersService {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    create(data: CreateUsersDto): Promise<Users>;
}
