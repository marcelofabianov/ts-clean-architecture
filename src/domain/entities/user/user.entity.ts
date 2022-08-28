import { userType } from './type/user.type';
import Id from '../../shared/value-objects/id.vo';
import Name from './value-objects/name.vo';
import Email from './value-objects/email.vo';
import Password from './value-objects/password.vo';
import CreatedAt from '../../shared/value-objects/created-at.vo';
import UpdatedAt from '../../shared/value-objects/updated-at.vo';

export default class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly active: boolean = true;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(user: userType) {
    this.id = Id.create(user.id);
    this.name = Name.create(user.name);
    this.email = Email.create(user.email);
    this.password = Password.create(user.password);
    this.active = user.active ?? true;
    this.createdAt = CreatedAt.create(user.createdAt);
    this.updatedAt = UpdatedAt.create(user.updatedAt);
  }
}
