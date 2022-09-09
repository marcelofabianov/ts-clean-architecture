import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { InMemoryDatabase } from '@certificates/infra/repositories/in-memory.database';

test('Deve salvar na memória um novo registro de certificado', async function () {
  const dto: CreateCertificateDto = {
    createdAt: CreatedAt.create(),
    updatedAt: UpdatedAt.create(),
    deletedAt: DeletedAt.create(),
    password: 'password',
    expiresIn: new Date()
  };

  const certificate = new Certificate(dto);
  const database = new InMemoryDatabase();
  const response = await database.save(certificate);

  expect(response).toBeInstanceOf(Certificate);
  expect(response.id).toBeTruthy();
});

test('Deve recuperar da memória o registro de certificado informando um ID', async function () {
  const database = new InMemoryDatabase();
  const certificate = await database.save(
    new Certificate({
      createdAt: CreatedAt.create(),
      updatedAt: UpdatedAt.create(),
      deletedAt: DeletedAt.create(),
      password: 'password',
      expiresIn: new Date()
    })
  );

  const response = await database.findById(certificate.id);

  expect(response).toBeInstanceOf(Certificate);
  expect(response.id === certificate.id).toBeTruthy();
});

test('Deve remover da memória o registro de certificado', async function () {
  const database = new InMemoryDatabase();
  const certificate = await database.save(
    new Certificate({
      createdAt: CreatedAt.create(),
      updatedAt: UpdatedAt.create(),
      deletedAt: DeletedAt.create(),
      password: 'password',
      expiresIn: new Date()
    })
  );

  const response = await database.delete(certificate);
  const count = (await database.list()).length;

  expect(response).toBe(true);
  expect(count === 0).toBeTruthy();
});
