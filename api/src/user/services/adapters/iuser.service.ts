import { User } from '../../model/user.types'
import { UserRequest } from '../../routes/user.dto'

export interface IProfileService {
  get: () => Promise<User>
  restore: () => Promise<User>
  update: (req: UserRequest) => Promise<User>
}
