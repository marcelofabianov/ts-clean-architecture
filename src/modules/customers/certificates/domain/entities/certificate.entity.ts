import { Entity } from '@/core/domain/entity.core';
import { CertificateData } from '@certificates/domain/entities/certificate.data';

export class Certificate extends Entity<CertificateData> {
  private readonly _password: string;
  private readonly _expiresIn: Date;

  constructor(data: CertificateData) {
    super(data);
    this._password = data._password;
    this._expiresIn = data._expiresIn;
  }

  get password(): string {
    return this._password;
  }

  get expiresIn(): Date {
    return this._expiresIn;
  }
}
