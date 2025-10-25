import { User } from '../model/user.types'
import { IUserRepository } from './iuser.repository'
import * as fileService from '../../utils/file.service'

export class UserStorage implements IUserRepository {
  private readonly path: string
  constructor (PATH: string) {
    this.path = PATH
  }

  get = async (): Promise<User> => {
    const data = await fileService.readFile(this.path)
    if (data === undefined) {
      const user: User = new User('User')
      await this.save(user)
      return user
    }
    return User.deserealize(data)
  }

  save = async (user: User): Promise<void> => {
    const saved = await fileService.writeFile(this.path, user.serialize())
    if (!saved) {
      throw new Error('Filure in save')
    }
    return undefined
  }

  restore = async (): Promise<void> => {
    const restored = await fileService.writeFile(this.path, 'User')
    if (!restored) {
      throw new Error('Failure at restore user name')
    }
    return undefined
  }
}
