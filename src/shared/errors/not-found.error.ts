import ErrorHandling from './error-handling';

export default class NotFoundError extends ErrorHandling {
  readonly errorName: string;

  constructor(errorName: string) {
    super(404, `Property '${errorName}' not found!`);
    this.errorName = errorName;
  }
}
