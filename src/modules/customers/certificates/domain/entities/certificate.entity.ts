import { Entity } from '@/core/domain/entity.core';
import { CertificateData } from '@certificates/domain/entities/certificate.data';

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
