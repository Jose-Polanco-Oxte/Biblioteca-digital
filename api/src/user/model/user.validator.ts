import { Result } from '../../utils/types'

// const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/u

export const validateName = (name: string): Result<void, string> => {
  if (name === '' || name === (' ')) {
    return Result.err('the name cannot be empty')
  }
  if (name.length <= 1) {
    return Result.err('the name is too short')
  }
  if (name.length >= 50) {
    return Result.err('the name is too long')
  }
  // if (!regex.test(name)) {
  //   return Result.err('invalid name')
  // }
  return Result.ok(undefined)
}
