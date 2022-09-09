export abstract class Factory<T> {
  quantity: number;

  constructor(quantity = 1) {
    this.quantity = quantity;
  }

  abstract generate(): T;

  create(): T[] {
    const data: T[] = [];
    let i = 1;

    for (i = 0; i <= this.quantity; i++) {
      data.push(this.generate());
    }
    return data;
  }
}
