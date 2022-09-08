export default class UpdatedAt {
  readonly value: Date;

  private constructor(updatedAt: Date) {
    this.value = updatedAt;
  }

  static build(updatedAt?: Date): Date {
    return new UpdatedAt(updatedAt ?? new Date()).value;
  }
}
