import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';
import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';
import { InMemoryDatabase } from '@certificates/infra/repositories/in-memory.database';
import { CreateCertificateUseCase } from '@certificates/domain/use-cases/create-certificate/create-certificate.use-case';
import { Certificate } from '@certificates/domain/entities/certificate.entity';

test('Deve criar um novo certificado', async function () {
  const dto: CreateCertificateDto = {
    createdAt: CreatedAt.create(),
    updatedAt: UpdatedAt.create(),
    deletedAt: DeletedAt.create(),
    password: 'password',
    expiresIn: new Date()
  };

  const repository = new CertificateRepository(new InMemoryDatabase());
  const useCase = new CreateCertificateUseCase(repository);

  const certificate = await useCase.execute(dto);

  expect(certificate).toBeInstanceOf(Certificate);
  expect(certificate.expiresIn === dto.expiresIn).toBeTruthy();
});
