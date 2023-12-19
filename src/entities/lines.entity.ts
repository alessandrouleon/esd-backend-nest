import { getDateInLocaleTime } from 'src/utils/Date';
import { v4 as uuid } from 'uuid';

export class Lines {
  id: string;
  code: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  constructor(props: Omit<Lines, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.createdAt = getDateInLocaleTime(new Date());
    this.id = id ?? uuid();
  }
}
