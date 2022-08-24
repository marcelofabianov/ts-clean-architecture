export class Password {
  private constructor(readonly value: string) {}

  static create(password: string): Password {
    return new Password(password);
  }
}
