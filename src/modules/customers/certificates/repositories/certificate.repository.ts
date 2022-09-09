import { ICreateCertificateRepository } from '@certificates/use-cases/create-certificate/create-certificate.repository';
import { IDatabaseAdapter } from '@certificates/adapters/database/database.adapter';
import { Certificate } from '@certificates/domain/certificate.entity';

export class CertificateRepository implements ICreateCertificateRepository {
  private readonly database: IDatabaseAdapter;
  private certificate: Certificate;

  constructor(database: IDatabaseAdapter) {
    this.database = database;
  }

  fill(certificate: Certificate): void {
    this.certificate = certificate;
  }

  async save(): Promise<Certificate> {
    return await this.database.save(this.certificate);
  }
}
