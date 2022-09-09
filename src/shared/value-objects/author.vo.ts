export type AuthorType = {
  name: string;
  email: string;
};

export default class Author {
  public readonly name: string;
  public readonly email: string;

  private constructor(author: AuthorType) {
    this.name = author.name;
    this.email = author.email;
  }

  static create(author: AuthorType): Author {
    return new Author(author);
  }
}
