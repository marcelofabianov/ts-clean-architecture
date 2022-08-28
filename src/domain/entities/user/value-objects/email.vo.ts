export default class Email {
  readonly value: string;

  private constructor(email: string) {
    this.value = email;
  }

  static create(email: string): string {
    return new Email(email).value;
  }

  static validate(email: string): boolean {
    return false;
  }
}
