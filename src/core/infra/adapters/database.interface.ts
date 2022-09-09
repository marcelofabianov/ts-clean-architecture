export interface IDatabaseAdapter<T> {
  save(data: T): Promise<T>;
  findById(id: string): Promise<T>;
  delete(id: string): Promise<boolean>;
  list(): Promise<T[]>;
  update(id: string, data: T): Promise<T>;
}
