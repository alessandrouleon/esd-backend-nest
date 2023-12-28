import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { Users } from 'src/entities/users-entity';

import IUsersRepository from 'src/repositories/users/users.repository.cantract';
import { getUtcDate } from 'src/utils/date';
import {
  UsersMessagesHelper,
  MessageHelps,
  EmployeeMessagesHelper,
} from 'src/utils/helprs/messages.helps';

@Injectable()
export class UpdateUsersService {
  constructor(
    @Inject('IUsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async update(id: string, data: UpdateUsersDto): Promise<Users> {
    try {
      const user = await this.usersRepository.findById(id);
      if (!user)
        throw new HttpException(
          UsersMessagesHelper.ID_NOT_EXIST,
          HttpStatus.BAD_REQUEST,
        );
      await Promise.all([
        this.validateUserName(data.userName, user.userName),
        this.validateEmail(data.email, user.email),
        this.validateEmployee(data.employeeId, user.employeeId),
      ]);

      return this.usersRepository.update(id, {
        updatedAt: getUtcDate(),
        ...data,
      });
    } catch (error) {
      this.handleUpdateError(error);
    }
  }

  private async validateUserName(
    newUserName: string,
    existingUserName: string,
  ): Promise<void> {
    if (newUserName && newUserName !== existingUserName) {
      const existUserName =
        await this.usersRepository.findByUserName(newUserName);
      if (existUserName) {
        throw new HttpException(
          UsersMessagesHelper.EXIST_USERNAME,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private async validateEmail(
    newEmail: string,
    existingEmail: string,
  ): Promise<void> {
    if (newEmail && newEmail !== existingEmail) {
      const existEmail = await this.usersRepository.findByEmail(newEmail);
      if (existEmail) {
        throw new HttpException(
          UsersMessagesHelper.EXIST_EMAIL,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private async validateEmployee(
    newEmployeeId: string,
    existingEmployeeId: string,
  ): Promise<void> {
    if (newEmployeeId && newEmployeeId !== existingEmployeeId) {
      const existEMployeeId =
        await this.usersRepository.findByEmployeeId(newEmployeeId);
      if (!existEMployeeId) {
        throw new HttpException(
          EmployeeMessagesHelper.ID_NOT_EXIST,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private handleUpdateError(error: Error): never {
    if (error instanceof HttpException) {
      throw error;
    } else {
      throw new HttpException(
        MessageHelps.INTERNAL_SERVER,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
