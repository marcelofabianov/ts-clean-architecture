import { UpdatedAt } from '@/shared/value-objects/control-dates.vo';

export interface CreateCertificateDto {
  updatedAt: UpdatedAt;
  password: string;
  expiresIn: Date;
}
