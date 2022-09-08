export default class CreatedAt {
  readonly value: Date;

  private constructor(createdAt: Date) {
    this.value = createdAt;
  }

  static build(createdAt?: Date): Date {
    return new CreatedAt(createdAt ?? new Date()).value;
  }
}
