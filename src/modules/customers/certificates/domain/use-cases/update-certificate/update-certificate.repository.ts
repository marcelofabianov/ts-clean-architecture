import { Certificate } from '@certificates/domain/entities/certificate.entity';

export interface IUpdateCertificateRepository {
  fill(request: Certificate): void;
  update(id: string): Promise<Certificate>;
}
