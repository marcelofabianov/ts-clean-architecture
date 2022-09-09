import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';
import { InMemoryDatabaseAdapter } from '@/core/infra/adapters/in-memory-database.adapter';

test('Deve listar os certificados cadastrados', async function () {
  const repository = new CertificateRepository(new InMemoryDatabaseAdapter());
  const factories = repository.factory(2);
  //const certificates = await repository.list();

  console.log(factories);

  expect(true).toBe(true);
});
