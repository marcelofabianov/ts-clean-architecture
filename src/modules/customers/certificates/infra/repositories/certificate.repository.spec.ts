import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import { CreatedAt, UpdatedAt } from '@/shared/value-objects/control-dates.vo';
import { InMemoryDatabaseAdapter } from '@/core/infra/adapters/in-memory-database.adapter';
import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import exp from 'constants';

test('Deve salvar um novo registro do certificado', async function () {
  const dto: CreateCertificateDto = {
    _createdAt: CreatedAt.create(),
    _updatedAt: UpdatedAt.create(),
    _password: 'password',
    _expiresIn: new Date()
  };

  const repository = new CertificateRepository(
    new InMemoryDatabaseAdapter<Certificate>()
  );

  repository.fill(new Certificate(dto));

  const response = await repository.save();

  expect(response).toBeTruthy();
  expect(response.expiresIn).toBe(dto._expiresIn);
});

test('Deve buscar o registro de certificado pelo ID', async function () {
  const repository = new CertificateRepository(
    new InMemoryDatabaseAdapter<Certificate>()
  );
  repository.fill(
    new Certificate({
      _createdAt: CreatedAt.create(),
      _updatedAt: UpdatedAt.create(),
      _password: 'my-password',
      _expiresIn: new Date()
    })
  );
  const id = (await repository.save()).id;

  const certificate = await repository.findById(id);

  expect(certificate.id).toBe(id);
  expect(certificate.password).toBe('my-password');
});

test('Deve excluir o registro de certificado', async function () {
  const repository = new CertificateRepository(
    new InMemoryDatabaseAdapter<Certificate>()
  );
  repository.fill(
    new Certificate({
      _createdAt: CreatedAt.create(),
      _updatedAt: UpdatedAt.create(),
      _password: 'my-password',
      _expiresIn: new Date()
    })
  );
  const id = (await repository.save()).id;
  const response = await repository.delete(id);

  expect(response).toBe(true);
});

test('Deve listar os registros de certificados', async function () {
  const repository = new CertificateRepository(
    new InMemoryDatabaseAdapter<Certificate>()
  );
  repository.fill(
    new Certificate({
      _createdAt: CreatedAt.create(),
      _updatedAt: UpdatedAt.create(),
      _password: 'my-password',
      _expiresIn: new Date()
    })
  );
  await repository.save();

  repository.fill(
    new Certificate({
      _createdAt: CreatedAt.create(),
      _updatedAt: UpdatedAt.create(),
      _password: 'my-password',
      _expiresIn: new Date()
    })
  );
  await repository.save();

  const certificates = await repository.list();

  expect(certificates.length).toBe(2);
});
