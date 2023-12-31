import { getUtcDate } from 'src/utils/date';
import { v4 as uuid } from 'uuid';

export class Employees {
  id: string;
  name: string;
  registration: string;
  department: string;
  shift: string;
  linesId: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  constructor(props: Omit<Employees, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.createdAt = getUtcDate();
    this.id = id ?? uuid();
  }
}
