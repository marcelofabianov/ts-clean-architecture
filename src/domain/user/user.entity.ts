import { UserData } from './user.data'
import { Email } from './value-objects/email.value-object'
import { Password } from './value-objects/password.value-object'

export class User {
  public readonly name: string
  public readonly email: Email
  public readonly password: Password
  public readonly active: boolean

  private constructor (user: UserData) {
    const { name, email, password, active } = user
    this.name = name
    this.email = email
    this.password = password
    this.active = active
  }

  static create (user: UserData): User {
    return new User(user)
  }
}
