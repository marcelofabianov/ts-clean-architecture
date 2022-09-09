import { Certificate } from '@certificates/domain/entities/certificate.entity';

export interface IListCertificateRepository {
  list(): Promise<Certificate[]>;
}
