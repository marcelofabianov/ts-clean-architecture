import Id from '@/shared/value-objects/Id.vo';

export abstract class Entity<T> {
  protected readonly _id: Id;
  public readonly props: T;

  constructor(props: T, id?: Id) {
    this._id = id ? id : Id.create();
    this.props = props;
  }
}
