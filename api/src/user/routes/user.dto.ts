import { User } from '../model/user.types'

export const toResponse = (user: User): UserResponse => {
  return {
    name: user.name
  }
}

export interface UserRequest {
  name: string
}

export interface UserResponse {
  name: string
}
