import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import IUsersRepository from 'src/repositories/users/users.repository.cantract';
import { getUtcDate } from 'src/utils/date';
import { UsersMessagesHelper } from 'src/utils/helprs/messages.helps';

@Injectable()
export class DeleteUsersService {
  constructor(
    @Inject('IUsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async remove(id: string): Promise<void> {
    const data = {} as UpdateUsersDto;
    const user = await this.usersRepository.findById(id);

    if (!user)
      throw new HttpException(
        UsersMessagesHelper.ID_NOT_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    await this.usersRepository.delete(id, {
      deletedAt: getUtcDate(),
      ...data,
    });
  }
}
