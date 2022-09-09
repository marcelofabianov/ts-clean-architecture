import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { InMemoryDatabase } from '@certificates/infra/repositories/in-memory.database';
import { CertificateRepository } from '@certificates/infra/repositories/certificate.repository';
import { Id } from '@/shared/value-objects/id.vo';

test('Deve salvar o registro de certificado', async function () {
  const dto: CreateCertificateDto = {
    createdAt: CreatedAt.create(),
    updatedAt: UpdatedAt.create(),
    deletedAt: DeletedAt.create(),
    password: 'password',
    expiresIn: new Date()
  };

  const certificate = new Certificate(dto);
  const database = new InMemoryDatabase();
  const repository = new CertificateRepository(database);

  repository.fill(certificate);
  const response = await repository.save();

  expect(response).toBeInstanceOf(Certificate);
  expect(response.expiresIn === dto.expiresIn).toBeTruthy();
});

test('Deve recuperar o registro do certificado pelo ID informado', async function () {
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
  const response = await repository.findById(id);

  expect(response).toBeInstanceOf(Certificate);
  expect(response.id === id).toBeTruthy();
});

test('Deve remover o registro do certificado pelo seu ID', async function () {
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
  const certificate = await repository.findById(id);
  repository.fill(certificate);

  const response = await repository.delete();

  expect(response).toBe(true);
});

test('Deve atualizar os dados do certificado', async function () {
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
  const certificate = new Certificate(
    {
      createdAt: CreatedAt.create(),
      updatedAt: UpdatedAt.create(),
      deletedAt: DeletedAt.create(),
      password: 'my-password',
      expiresIn: new Date()
    },
    Id.create(id)
  );

  const repository = new CertificateRepository(database);
  repository.fill(certificate);

  const response = await repository.update(id);

  expect(response.id).toBe(id);
  expect(response.password).toBe('my-password');
});
