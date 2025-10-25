import { IUserRepository } from '../../data/iuser.repository'
import { User, UserRequest, UserResponse } from '../../model/user.types'
import { validateName } from '../../model/user.validator'
import { IUserService } from '../adapters/iuser.service'

export class UserService implements IUserService {
  repository: IUserRepository
  constructor (repository: IUserRepository) {
    this.repository = repository
  }

  getUser = async (): Promise<UserResponse> => {
    return await this.repository.get()
  }

  restoreUser = async (): Promise<UserResponse> => {
    await this.repository.restore()
    return new User('User')
  }

  saveUser = async (req: UserRequest): Promise<UserResponse> => {
    const result = validateName(req.name)
    if (!result.ok) {
      throw new Error(result.error)
    }
    const user = req as User
    await this.repository.save(user)
    return user
  }
}
