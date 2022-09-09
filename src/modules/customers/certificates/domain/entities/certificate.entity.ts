import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import { Entity } from '@/core/domain/entity.core';
import { Id } from '@/shared/value-objects/id.vo';

export class Certificate extends Entity<CreateCertificateDto> {
  constructor(props: CreateCertificateDto, id?: Id) {
    super(props, id);
  }
  get id(): string {
    return this._id.value;
  }

  get password(): string {
    return this.props.password;
  }

  get expiresIn(): Date {
    return this.props.expiresIn;
  }
}
