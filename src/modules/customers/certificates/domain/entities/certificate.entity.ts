import { Entity, IEntity } from '@/core/domain/entity.core';

export interface CertificateData extends IEntity {
  password: string;
  expiresIn: Date;
}

export class Certificate extends Entity<CertificateData> {
  private _password: string;
  private _expiresIn: Date;

  constructor(data: CertificateData) {
    super(data);
  }

  get password(): string {
    return this._password;
  }

  get expiresIn(): Date {
    return this._expiresIn;
  }
}
