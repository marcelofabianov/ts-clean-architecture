import { CreateCertificateDto } from '@certificates/domain/dtos/create-certificate.dto';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { InMemoryDatabase } from '@certificates/infra/repositories/in-memory.database';

test('Deve salvar na memória um novo certificado', async function () {
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

test('Deve recuperar o registro de certificado informando um ID', async function () {
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
