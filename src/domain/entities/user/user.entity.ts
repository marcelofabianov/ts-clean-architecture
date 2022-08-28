import { userType } from './type/user.type';
import { randomUUID } from 'crypto';

export default class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly active: boolean = true;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(user: userType) {
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.active = user.active ?? true;
    this.createdAt = user.createdAt ?? new Date();
    this.updatedAt = user.updatedAt ?? new Date();
  }
}
