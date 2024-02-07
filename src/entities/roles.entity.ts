import { getUtcDate } from 'src/utils/date';
import { v4 as uuid } from 'uuid';
export class Roles {
  id: string;
  name: string;
  permissions: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  constructor(props: Omit<Roles, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.createdAt = getUtcDate();
    this.id = id ?? uuid();
  }
}
