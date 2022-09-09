import { IDatabaseAdapter } from '@/core/adapters/database.adapter';
import { Certificate } from '@certificates/domain/entities/certificate.entity';

export class InMemoryDatabase implements IDatabaseAdapter<Certificate> {
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

  findById(id: string): Promise<Certificate> {
    return new Promise((resolve, reject) => {
      const certificate = this.database.find((cert) => {
        return cert.id === id;
      });
      if (certificate) {
        resolve(certificate);
      } else {
        reject(new Error('Not found!'));
      }
    });
  }
}
