export default class Password {
  readonly value: string;

  private constructor(password: string) {
    this.value = password;
  }

  static create(password: string): string {
    return new Password(password).value;
  }
}
