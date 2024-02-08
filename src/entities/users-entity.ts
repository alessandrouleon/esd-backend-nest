import { getUtcDate } from 'src/utils/date';
import { v4 as uuid } from 'uuid';

export class Users {
  id: string;
  userName: string;
  password: string;
  email: string;
  employeeId: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  constructor(props: Omit<Users, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.createdAt = getUtcDate();
    this.id = id ?? uuid();
  }
}
