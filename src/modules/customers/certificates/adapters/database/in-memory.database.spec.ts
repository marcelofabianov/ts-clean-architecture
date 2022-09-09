import { InMemoryDatabase } from '@certificates/adapters/database/in-memory.database';
import { Certificate } from '@certificates/domain/certificate.entity';
import { CreateCertificateDto } from '@certificates/dtos/create-certificate.dto';
import { Id } from '@/shared/value-objects/id.vo';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';

describe('Teste Unitário: InMemoryDatabase', function () {
  it('Deve tentar salvar um novo registro de certificado', async function () {
    const dto: CreateCertificateDto = {
      id: Id.create(),
      createdAt: CreatedAt.create(),
      updatedAt: UpdatedAt.create(),
      deletedAt: DeletedAt.create(),
      password: 'password',
      expiresIn: new Date()
    };
    const certificate = new Certificate(dto);
    const database = new InMemoryDatabase();
    const response = await database.save(certificate);

    console.log(response);

    expect(true).toBeTruthy();
  });
});
