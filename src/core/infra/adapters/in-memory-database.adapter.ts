import { IDatabaseAdapter } from '@/core/infra/adapters/database.interface';

interface entity {
  id: string;
}

export class InMemoryDatabaseAdapter<T extends entity>
  implements IDatabaseAdapter<T>
{
  private database: T[];

  constructor() {
    this.database = [];
  }

  findById(id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const entity = this.database.find((ent) => {
        return ent.id === id;
      });
      if (entity) {
        resolve(entity);
      } else {
        reject(new Error('Not found!'));
      }
    });
  }

  save(entity: T): Promise<T> {
    return new Promise((resolve) => {
      this.database.push(entity);
      resolve(entity);
    });
  }

  delete(id: string): Promise<boolean> {
    this.database = this.database.filter((ent) => ent.id !== id);
    return Promise.resolve(true);
  }

  list(): Promise<T[]> {
    return Promise.resolve(this.database);
  }

  async update(id: string, certificate: T): Promise<T> {
    await this.delete(id);
    await this.save(certificate);
    return Promise.resolve(certificate);
  }
}
