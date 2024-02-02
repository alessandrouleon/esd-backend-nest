import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { Users } from 'src/entities/users-entity';
import IUsersRepository from 'src/repositories/users/users.repository.cantract';
export declare class UpdateUsersService {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    update(id: string, data: UpdateUsersDto): Promise<Users>;
    private validateUserName;
    private validateEmail;
    private validateEmployee;
    private handleUpdateError;
}
