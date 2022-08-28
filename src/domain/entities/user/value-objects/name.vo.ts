export default class Name {
  readonly value: string;

  private constructor(name: string) {
    this.value = name;
  }

  static create(name: string): string {
    return new Name(name).value;
  }
}
