export default class DeletedAt {
  readonly value: Date;

  private constructor(deletedAt: Date) {
    this.value = deletedAt;
  }

  static build(deletedAt?: Date): Date {
    return new DeletedAt(deletedAt ?? new Date()).value;
  }
}
