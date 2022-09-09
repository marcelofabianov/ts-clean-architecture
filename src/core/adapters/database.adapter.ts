export interface IDatabaseAdapter<T> {
  save(data: object): Promise<T>;
  findById(id: string): Promise<T>;
}
