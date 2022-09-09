import { IUseCase } from '@/core/domain/use-case.core';
import { ICreateCertificateRepository } from '@certificates/domain/use-cases/create-certificate/create-certificate.repository';
import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import { Certificate } from '@certificates/domain/entities/certificate.entity';

export class CreateCertificateUseCase
  implements IUseCase<CreateCertificateDto, Certificate>
{
  constructor(private readonly repository: ICreateCertificateRepository) {}

  execute(dto: CreateCertificateDto): Promise<Certificate> {
    const { _password, _expiresIn, _createdAt, _updatedAt } = dto;
    this.repository.fill(
      new Certificate({ _expiresIn, _password, _createdAt, _updatedAt })
    );
    return this.repository.save();
  }
}
