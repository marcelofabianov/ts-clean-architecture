import { IUseCase } from '@/core/domain/use-case.core';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { IGetCertificateRepository } from '@certificates/domain/use-cases/get-certificate/get-certificate.repository';
export class GetCertificateUseCase implements IUseCase<string, Certificate> {
  constructor(private readonly repository: IGetCertificateRepository) {}

  execute(id: string): Promise<Certificate> {
    return this.repository.findById(id);
  }
}
