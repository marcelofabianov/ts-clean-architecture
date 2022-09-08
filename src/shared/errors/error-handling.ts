import ErrorInterface from './error-interface';

export default class ErrorHandling extends Error implements ErrorInterface {
  readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}
