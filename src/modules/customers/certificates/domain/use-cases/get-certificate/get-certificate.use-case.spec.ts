import { Certificate } from '@certificates/domain/entities/certificate.entity';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';
import { GetCertificateUseCase } from '@certificates/domain/use-cases/get-certificate/get-certificate.use-case';
import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';
import { InMemoryDatabaseAdapter } from '@/core/adapters/in-memory-database.adapter';

test('Deve obter registro do certificado pelo ID', async function () {
  const database = new InMemoryDatabaseAdapter<Certificate>();
  const id = (
    await database.save(
      new Certificate({
        _createdAt: CreatedAt.create(),
        _updatedAt: UpdatedAt.create(),
        _password: 'password',
        _expiresIn: new Date()
      })
    )
  ).id;

  const repository = new CertificateRepository(database);
  const useCase = new GetCertificateUseCase(repository);
  const response = await useCase.execute(id);

  expect(response).toBeInstanceOf(Certificate);
  expect(response.id === id).toBeTruthy();
});
