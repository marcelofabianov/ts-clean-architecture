export class Password {
  private constructor(readonly value: string) {}

  static create(value: string): Password {
    return new Password(value);
  }
}
