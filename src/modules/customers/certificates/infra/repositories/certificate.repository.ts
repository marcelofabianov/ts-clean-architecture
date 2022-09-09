import { ICreateCertificateRepository } from '@certificates/domain/use-cases/create-certificate/create-certificate.repository';
import { IDatabaseAdapter } from '@/core/adapters/database.adapter';
import { Certificate } from '@certificates/domain/entities/certificate.entity';

export class CertificateRepository implements ICreateCertificateRepository {
  private readonly database: IDatabaseAdapter<Certificate>;
  private certificate: Certificate;

  constructor(database: IDatabaseAdapter<Certificate>) {
    this.database = database;
  }

  async findById(id: string): Promise<Certificate> {
    return await this.database.findById(id);
  }

  fill(certificate: Certificate): void {
    this.certificate = certificate;
  }

  async save(): Promise<Certificate> {
    return await this.database.save(this.certificate);
  }
}
