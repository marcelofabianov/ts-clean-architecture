export class Email {
  private constructor(readonly value: string) {}

  static create(email: string): Email {
    return new Email(email);
  }
}
