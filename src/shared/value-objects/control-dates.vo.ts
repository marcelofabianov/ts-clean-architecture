export class CreatedAt {
  readonly value: Date;

  private constructor(createdAt: Date) {
    this.value = createdAt;
  }

  static create(createdAt?: Date): CreatedAt {
    return new CreatedAt(createdAt ?? new Date());
  }
}

export class UpdatedAt {
  readonly value: Date;

  private constructor(updatedAt: Date) {
    this.value = updatedAt;
  }

  static create(updatedAt?: Date): UpdatedAt {
    return new UpdatedAt(updatedAt ?? new Date());
  }
}

export class DeletedAt {
  readonly value: Date;

  private constructor(deletedAt: Date) {
    this.value = deletedAt;
  }

  static create(deletedAt?: Date): DeletedAt {
    return new DeletedAt(deletedAt ?? new Date());
  }
}
