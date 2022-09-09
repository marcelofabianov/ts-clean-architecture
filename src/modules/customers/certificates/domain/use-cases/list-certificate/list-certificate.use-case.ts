import { IUseCase } from '@/core/domain/use-case.core';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { IListCertificateRepository } from '@certificates/domain/use-cases/list-certificate/list-certificate.repository';

export class ListCertificateUseCase implements IUseCase<never, Certificate[]> {
  constructor(private readonly repository: IListCertificateRepository) {}

  execute(): Promise<Certificate[]> {
    return this.repository.list();
  }
}
