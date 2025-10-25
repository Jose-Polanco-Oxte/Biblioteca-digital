import { IUserRepository } from '../../data/iuser.repository'
import { User } from '../../model/user.types'
import { UserRequest } from '../../routes/user.dto'
import { validateName } from '../../model/user.validator'
import { IProfileService } from '../adapters/iuser.service'
import { HttpError } from '../../../utils/types'

export class ProfileService implements IProfileService {
  repository: IUserRepository
  constructor (repository: IUserRepository) {
    this.repository = repository
  }

  get = async (): Promise<User> => {
    return await this.repository.get()
  }

  restore = async (): Promise<User> => {
    await this.repository.restore()
    return new User('User')
  }

  update = async (req: UserRequest): Promise<User> => {
    const result = validateName(req.name)
    if (!result.ok) {
      throw new HttpError('invalid name', 400, result.error)
    }
    const user = new User(req.name)
    await this.repository.save(user)
    return user
  }
}
