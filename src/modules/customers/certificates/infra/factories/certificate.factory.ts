import { Factory } from '@/core/infra/factories/factory.core';
import { Certificate } from '@certificates/domain/entities/certificate.entity';
import { CreatedAt, UpdatedAt } from '@/shared/value-objects/control-dates.vo';

export class CertificateFactory extends Factory<Certificate> {
  generate(): Certificate {
    return new Certificate({
      _createdAt: CreatedAt.create(),
      _updatedAt: UpdatedAt.create(),
      _password: (Math.random() + 1).toString(36).substring(7),
      _expiresIn: new Date()
    });
  }
}
