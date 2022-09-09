import { Certificate } from '@certificates/domain/entities/certificate.entity';

export interface IRemoveCertificateRepository {
  findById(id: string): Promise<Certificate>;
  fill(request: Certificate): void;
  delete(): Promise<boolean>;
}
