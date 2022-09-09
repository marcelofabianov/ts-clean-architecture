import { Id } from '@/shared/value-objects/id.vo';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';

export interface CreateCertificateDto {
  id: Id;
  createdAt: CreatedAt;
  updatedAt: UpdatedAt;
  deletedAt: DeletedAt;
  password: string;
  expiresIn: Date;
}
