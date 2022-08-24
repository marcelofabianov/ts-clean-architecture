export class Password {
  private constructor (
    readonly password: string
  ) {
  }

  static create (password: string): Password {
    return new Password(password)
  }
}
