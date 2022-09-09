import { v4 as uuid } from 'uuid';

export class Id {
  private readonly _value: string;

  private constructor(id: string) {
    this._value = id;
  }

  get value(): string {
    return this._value;
  }

  static create(id?: string): Id {
    return new Id(id ?? uuid());
  }
}
