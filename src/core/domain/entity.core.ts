import { Id } from '@/shared/value-objects/id.vo';
import {
  CreatedAt,
  DeletedAt,
  UpdatedAt
} from '@/shared/value-objects/control-dates.vo';

export interface IEntity {
  _id?: Id;
  _createdAt: CreatedAt;
  _updatedAt: UpdatedAt;
  _deletedAt?: DeletedAt | null;
}

export class Entity<T extends IEntity> {
  private readonly _createdAt: CreatedAt;
  private _id?: Id;
  private _updatedAt: UpdatedAt;
  private readonly _deletedAt?: DeletedAt | null;

  constructor(data: T) {
    const { _id, _createdAt, _updatedAt, _deletedAt } = data;
    this._id = _id ?? Id.create();
    this._createdAt = _createdAt;
    this._updatedAt = _updatedAt;
    this._deletedAt = _deletedAt ?? null;
  }

  get id(): string {
    if (this._id) {
      return this._id.value;
    }
    this._id = Id.create();
    return this._id.value;
  }

  get createdAt(): Date {
    return this._createdAt.value;
  }

  get updatedAt(): Date {
    return this._updatedAt.value;
  }

  get deletedAt(): Date | null {
    if (this._deletedAt) {
      return this._deletedAt.value;
    }
    return null;
  }
}
