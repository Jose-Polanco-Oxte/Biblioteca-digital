import { UserRequest, UserResponse } from '../../model/user.types'

export interface IUserService {
  getUser: () => Promise<UserResponse>
  restoreUser: () => Promise<UserResponse>
  saveUser: (req: UserRequest) => Promise<UserResponse>
}
