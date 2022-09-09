import { CertificateFactory } from '@certificates/infra/factories/certificate.factory';
import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';
import { InMemoryDatabaseAdapter } from '@/core/infra/adapters/in-memory-database.adapter';

test('Deve listar os certificados cadastrados', async function () {
  new CertificateFactory(3).create();

  const repository = new CertificateRepository(new InMemoryDatabaseAdapter());
  const certificates = await repository.list();

  console.log(certificates);

  expect(certificates.length).toBe(3);
});
