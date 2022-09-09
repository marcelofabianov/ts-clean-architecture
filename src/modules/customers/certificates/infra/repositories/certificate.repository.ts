import { ICreateCertificateRepository } from '@certificates/domain/use-cases/create-certificate/create-certificate.repository';
import { IDatabaseAdapter } from '@/core/infra/adapters/database.interface';
import { IGetCertificateRepository } from '@certificates/domain/use-cases/get-certificate/get-certificate.repository';
import { IRemoveCertificateRepository } from '@certificates/domain/use-cases/remove-certificate/remove-certificate.repository';
import { IUpdateCertificateRepository } from '@certificates/domain/use-cases/update-certificate/update-certificate.repository';
import { IListCertificateRepository } from '@certificates/domain/use-cases/list-certificate/list-certificate.repository';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { CertificateFactory } from '@certificates/infra/factories/certificate.factory';

export class CertificateRepository
  implements
    ICreateCertificateRepository,
    IGetCertificateRepository,
    IRemoveCertificateRepository,
    IUpdateCertificateRepository,
    IListCertificateRepository
{
  private readonly database: IDatabaseAdapter<Certificate>;
  private certificate: Certificate;

  constructor(database: IDatabaseAdapter<Certificate>) {
    this.database = database;
  }

  fill(certificate: Certificate): void {
    this.certificate = certificate;
  }

  save(): Promise<Certificate> {
    return this.database.save(this.certificate);
  }

  findById(id: string): Promise<Certificate> {
    return this.database.findById(id);
  }

  delete(id: string): Promise<boolean> {
    return this.database.delete(id);
  }

  update(id: string): Promise<Certificate> {
    return this.database.update(id, this.certificate);
  }

  list(): Promise<Certificate[]> {
    return this.database.list();
  }

  factory(quantity = 1): Certificate[] {
    const data: Certificate[] = [];
    const factory = new CertificateFactory(quantity).create();

    factory.map(async (certificate) => {
      const cert = await this.database.save(certificate);
      data.push(cert);
    });

    console.log('certificates: ', data);

    return data;
  }
}
