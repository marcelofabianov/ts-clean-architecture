export interface IDatabaseAdapter<T> {
  save(data: object): Promise<T>;
  findById(id: string): Promise<T>;
  delete(id: string): Promise<boolean>;
  list(): Promise<T[]>;
  update(id: string, data: object): Promise<T>;
}
