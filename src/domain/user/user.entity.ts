import { UserData } from './user.data';

export class User {
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly active: boolean;

  private constructor(user: UserData) {
    const { name, email, password, active } = user;
    this.name = name;
    this.email = email.value;
    this.password = password.value;
    this.active = active;
  }

  static create(user: UserData): User {
    return new User(user);
  }
}
