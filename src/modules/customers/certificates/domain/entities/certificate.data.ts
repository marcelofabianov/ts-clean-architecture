import { IEntity } from '@/core/domain/entity.core';

export interface CertificateData extends IEntity {
  _password: string;
  _expiresIn: Date;
}
