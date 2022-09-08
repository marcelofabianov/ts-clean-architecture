import { AuthorType } from '../value-objects/author.vo';
import CreatedAt from '../value-objects/created-at.vo';
import UpdatedAt from '../value-objects/updated-at.vo';
import DeletedAt from '../value-objects/deleted-at.vo';
import Id from '../value-objects/id.vo';

export type TrackerDates = {
  createdAt: CreatedAt;
  updatedAt: UpdatedAt;
  deletedAt?: DeletedAt;
};

export default class Tracker {
  readonly id: Id;
  readonly name?: string;
  readonly email?: string;
  readonly createdAt: CreatedAt;
  readonly updatedAt: UpdatedAt;
  readonly deletedAt?: DeletedAt;

  private constructor(trackerDates: TrackerDates, author?: AuthorType) {
    if (author) {
      this.name = author.name;
      this.email = author.email;
    }
    this.createdAt = trackerDates.createdAt;
    this.updatedAt = trackerDates.updatedAt;
    this.deletedAt = trackerDates.deletedAt;
    this.id = Id.build();
  }

  static build(trackerDates: TrackerDates, author?: AuthorType): Tracker {
    return new Tracker(trackerDates, author);
  }
}
