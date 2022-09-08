export type Either<L, R> = Left<L, R> | Right<L, R>;

export class Left<L, R> {
  readonly error: L;

  constructor(error: L) {
    this.error = error;
  }

  isLeft(): this is Left<L, R> {
    return true;
  }

  isRight(): this is Right<L, R> {
    return false;
  }
}

export class Right<L, R> {
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return false;
  }

  isRight(): this is Right<L, R> {
    return true;
  }
}

export const left = <L, R>(l: L): Either<L, R> => {
  return new Left(l);
};

export const right = <L, R>(r: R): Either<L, R> => {
  return new Right<L, R>(r);
};
