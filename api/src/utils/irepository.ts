export interface IRepository<T, ID> {
  getById: (id: ID) => Promise<T | undefined>
  save: (entity: T) => Promise<void>
  delete: (id: ID) => Promise<void>
}
