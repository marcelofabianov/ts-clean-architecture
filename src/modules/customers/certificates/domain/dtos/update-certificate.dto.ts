import { CreatedAt, UpdatedAt } from '@/shared/value-objects/control-dates.vo';

export interface UpdateCertificateDto {
  _createdAt: CreatedAt;
  _updatedAt: UpdatedAt;
  _password: string;
  _expiresIn: Date;
}
