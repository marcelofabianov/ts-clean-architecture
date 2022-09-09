import { Id } from '@/shared/value-objects/id.vo';

export abstract class Entity<T> {
  protected readonly _id: Id;
  public readonly props: T;

  protected constructor(props: T, id?: Id) {
    this._id = id ? id : Id.create();
    this.props = props;
  }
}
