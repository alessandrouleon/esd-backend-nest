import {
  // HttpException, HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateRolesDto } from 'src/dtos/roles/create-roles.dto';
import IRolesRepository from 'src/repositories/roles/roles.repository.contract';
import { Roles } from 'src/entities/roles.entity';
// import { LineMessagesHelper } from 'src/utils/helprs/messages.helps';

@Injectable()
export class CreateRolesService {
  constructor(
    @Inject('IRolesRepository')
    private RolesRepository: IRolesRepository,
  ) {}

  async create(data: CreateRolesDto): Promise<Roles> {
    // const [existCode, existDescription] = await Promise.all([
    //   this.RolesRepository.findByCode(data.code),
    //   this.RolesRepository.findByDescription(data.description),
    // ]);

    // if (existCode)
    //   throw new HttpException(  // HttpException, HttpStatus,
    //     LineMessagesHelper.EXIST_CODE,
    //     HttpStatus.BAD_REQUEST,
    //   );

    // if (existDescription)
    //   throw new HttpException(
    //     LineMessagesHelper.EXIST_DESCRIPTION,
    //     HttpStatus.BAD_REQUEST,
    //   );

    return this.RolesRepository.create(data);
  }
}
