import { ICreateCertificateRepository } from '@certificates/domain/use-cases/create-certificate/create-certificate.repository';
import { IDatabaseAdapter } from '@/core/adapters/database.interface';
import { IGetCertificateRepository } from '@certificates/domain/use-cases/get-certificate/get-certificate.repository';
import { IRemoveCertificateRepository } from '@certificates/domain/use-cases/remove-certificate/remove-certificate.repository';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { IUpdateCertificateRepository } from '@certificates/domain/use-cases/update-certificate/update-certificate.repository';

export class CertificateRepository
  implements
    ICreateCertificateRepository,
    IGetCertificateRepository,
    IRemoveCertificateRepository,
    IUpdateCertificateRepository
{
  private readonly database: IDatabaseAdapter<Certificate>;
  private certificate: Certificate;

  constructor(database: IDatabaseAdapter<Certificate>) {
    this.database = database;
  }

  findById(id: string): Promise<Certificate> {
    return this.database.findById(id);
  }

  fill(certificate: Certificate): void {
    this.certificate = certificate;
  }

  save(): Promise<Certificate> {
    return this.database.save(this.certificate);
  }

  delete(): Promise<boolean> {
    return this.database.delete(this.certificate.id);
  }

  update(id: string): Promise<Certificate> {
    return this.database.update(id, this.certificate);
  }
}
