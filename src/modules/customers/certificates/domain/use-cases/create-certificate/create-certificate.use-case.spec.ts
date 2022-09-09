import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';
import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';
import { CreateCertificateUseCase } from '@certificates/domain/use-cases/create-certificate/create-certificate.use-case';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { InMemoryDatabaseAdapter } from '@/core/adapters/in-memory-database.adapter';

test('Deve criar um novo certificado', async function () {
  const dto: CreateCertificateDto = {
    _createdAt: CreatedAt.create(),
    _updatedAt: UpdatedAt.create(),
    _password: 'password',
    _expiresIn: new Date()
  };

  const repository = new CertificateRepository(
    new InMemoryDatabaseAdapter<Certificate>()
  );

  const useCase = new CreateCertificateUseCase(repository);
  const certificate = await useCase.execute(dto);

  expect(certificate).toBeInstanceOf(Certificate);
  expect(certificate.expiresIn === dto._expiresIn).toBeTruthy();
});
