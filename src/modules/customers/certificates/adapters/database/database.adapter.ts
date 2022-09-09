import { Certificate } from '@certificates/domain/certificate.entity';

export interface IDatabaseAdapter {
  save(certificate: Certificate): Promise<Certificate>;
}
