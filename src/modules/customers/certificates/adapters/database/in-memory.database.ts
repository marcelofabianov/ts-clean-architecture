import { IDatabaseAdapter } from '@certificates/adapters/database/database.adapter';
import { Certificate } from '@certificates/domain/certificate.entity';

export class InMemoryDatabase implements IDatabaseAdapter {
  private database: Certificate[];

  constructor() {
    this.database = [];
  }

  save(certificate: Certificate): Promise<Certificate> {
    return new Promise((resolve) => {
      this.database.push(certificate);
      resolve(certificate);
    });
  }
}
