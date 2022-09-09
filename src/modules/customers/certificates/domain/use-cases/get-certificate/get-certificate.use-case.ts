import { IUseCase } from '@/core/domain/use-case.core';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { ICreateCertificateRepository } from '@certificates/domain/use-cases/create-certificate/create-certificate.repository';

export class GetCertificateUseCase implements IUseCase<string, Certificate> {
  constructor(private readonly repository: ICreateCertificateRepository) {}

  execute(id: string): Promise<Certificate> | Certificate {
    return this.repository.findById(id);
  }
}
