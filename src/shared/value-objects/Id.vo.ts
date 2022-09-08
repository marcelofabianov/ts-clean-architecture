import { v4 as uuid } from 'uuid';

export default class Id {
  readonly value: string;

  private constructor(id: string) {
    this.value = id;
  }

  static create(id?: string): Id {
    return new Id(id ?? uuid());
  }
}
