import { Certificate } from '@certificates/domain/entities/certificate.entity';

export interface ICreateCertificateRepository {
  findById(id: string): Promise<Certificate>;
  fill(request: Certificate): void;
  save(): Promise<Certificate>;
}
