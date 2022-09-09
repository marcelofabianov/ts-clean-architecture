import { IUseCase } from '@/core/domain/use-case.core';
import { ICreateCertificateRepository } from '@certificates/use-cases/create-certificate/create-certificate.repository';
import { CreateCertificateDto } from '@certificates/dtos/create-certificate.dto';
import { Certificate } from '@certificates/domain/certificate.entity';

export class CreateCertificateUseCase
  implements IUseCase<CreateCertificateDto, Certificate>
{
  constructor(private readonly repository: ICreateCertificateRepository) {}

  execute(dto: CreateCertificateDto): Promise<Certificate> | Certificate {
    this.repository.fill(new Certificate(dto));
    return this.repository.save();
  }
}
