export class Email {
  private constructor(readonly email: string) {}

  static create(email: string): Email {
    return new Email(email);
  }
}
