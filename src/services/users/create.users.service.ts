import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { Users } from 'src/entities/users-entity';
import IUsersRepository from 'src/repositories/users/users.repository.cantract';
import {
  EmployeeMessagesHelper,
  UsersMessagesHelper,
} from 'src/utils/helprs/messages.helps';

//import { format } from 'date-fns-tz';

@Injectable()
export class CreateUsersService {
  constructor(
    @Inject('IUsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async create(data: CreateUsersDto): Promise<Users> {
    const [existsUserName, existsEmail, existsEmployeeId] = await Promise.all([
      this.usersRepository.findByUserName(data.userName),
      this.usersRepository.findByEmail(data.email),
      this.usersRepository.findByEmployeeId(data.employeeId),
    ]);

    //

    // const today = new Date();
    // const formattedDate = format(today, 'dd/MM/yyyy');
    // console.log('data::', formattedDate);
    //

    //     const today = new Date(); // Wed Sep 16 2020 13:25:16

    //     console.log(`
    //   Time in Munich: ${format(today, 'yyyy-MM-dd HH:mm:ss')}
    // `);

    if (existsUserName) {
      throw new HttpException(
        UsersMessagesHelper.EXIST_USERNAME,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (existsEmail) {
      throw new HttpException(
        UsersMessagesHelper.EXIST_EMAIL,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!existsEmployeeId) {
      throw new HttpException(
        EmployeeMessagesHelper.ID_NOT_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.usersRepository.create(data);
  }
}
