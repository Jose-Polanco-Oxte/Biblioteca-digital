import { User } from '../model/user.types'

export interface IUserRepository {
  get: () => Promise<User>
  save: (user: User) => Promise<void>
  restore: () => Promise<void>
}
