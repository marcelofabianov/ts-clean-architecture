import { Certificate } from '@certificates/domain/entities/certificate.entity';

export interface ICreateCertificateRepository {
  fill(request: Certificate): void;
  save(): Promise<Certificate>;
}
