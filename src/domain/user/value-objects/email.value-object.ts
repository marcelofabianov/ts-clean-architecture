export class Email {
  private constructor(readonly value: string) {}

  static create(value: string): Email {
    return new Email(value);
  }
}
