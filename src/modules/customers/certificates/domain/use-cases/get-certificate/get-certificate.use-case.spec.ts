import { InMemoryDatabase } from '@certificates/infra/repositories/in-memory.database';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';
import { GetCertificateUseCase } from '@certificates/domain/use-cases/get-certificate/get-certificate.use-case';
import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';

test('Deve obter registro do certificado pelo ID', async function () {
  const database = new InMemoryDatabase();
  const id = (
    await database.save(
      new Certificate({
        createdAt: CreatedAt.create(),
        updatedAt: UpdatedAt.create(),
        deletedAt: DeletedAt.create(),
        password: 'password',
        expiresIn: new Date()
      })
    )
  ).id;

  const repository = new CertificateRepository(database);
  const useCase = new GetCertificateUseCase(repository);
  const response = await useCase.execute(id);

  expect(response).toBeInstanceOf(Certificate);
  expect(response.id === id).toBeTruthy();
});
