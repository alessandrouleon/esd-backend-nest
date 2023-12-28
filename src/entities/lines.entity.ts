import { getUtcDate } from 'src/utils/date';
import { v4 as uuid } from 'uuid';
export class Lines {
  id: string;
  code: string;
  description: string;
  stage?: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  constructor(props: Omit<Lines, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.createdAt = getUtcDate();
    this.id = id ?? uuid();
  }
}
