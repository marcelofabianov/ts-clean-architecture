export type AuthorType = {
  name: string;
  email: string;
};

export default class Author {
  public readonly name: string;
  public readonly email: string;

  private constructor(author: AuthorType) {
    const { name, email } = author;
    this.name = name;
    this.email = email;
  }

  static build(author: AuthorType) {
    return new Author(author);
  }
}
