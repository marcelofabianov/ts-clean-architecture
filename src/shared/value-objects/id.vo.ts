import { randomUUID } from 'crypto';

export default class Id {
  readonly value: string;

  private constructor(id: string) {
    this.value = id;
  }

  static build(id?: string): Id {
    return new Id(id ?? randomUUID());
  }
}
