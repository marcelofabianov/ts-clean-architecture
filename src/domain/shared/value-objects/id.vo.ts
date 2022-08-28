import { randomUUID } from 'crypto';

export default class Id {
  readonly value: string;

  private constructor(id: string) {
    this.value = id;
  }

  static create(id?: string): string {
    return new Id(id ?? randomUUID()).value;
  }
}
