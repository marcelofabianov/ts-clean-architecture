import { Certificate } from '@certificates/domain/certificate.entity';

export interface ICreateCertificateRepository {
  fill(request: Certificate): void;
  save(): Promise<Certificate>;
}
