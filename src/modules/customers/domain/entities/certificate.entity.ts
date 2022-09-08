import { Entity } from '@/core/domain/entity';
import Id from '@/shared/value-objects/Id.vo';

export interface ICertificateProps {
  id: Id;
  password: string;
  expiresIn: Date;
}

export default class Certificate extends Entity<ICertificateProps> {
  constructor(props: ICertificateProps, id?: Id) {
    super(props, id);
  }

  get id(): string {
    return this.id;
  }

  get password(): string {
    return this.password;
  }

  get expiresIn(): Date {
    return this.expiresIn;
  }
}
