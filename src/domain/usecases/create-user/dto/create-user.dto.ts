export default class CreateUserDto {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string
  ) {}
}
