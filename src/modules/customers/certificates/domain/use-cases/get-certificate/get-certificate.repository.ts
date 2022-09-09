import { Certificate } from '@certificates/domain/entities/certificate.entity';

export interface IGetCertificateRepository {
  findById(id: string): Promise<Certificate>;
}
