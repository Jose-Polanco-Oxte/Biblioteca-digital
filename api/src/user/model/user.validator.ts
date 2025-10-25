import { Result } from '../../utils/types'

const valid = /^(?!.* {2,})(?!.*['-]{2,})\p{L}+(?:[ '-]\p{L}+)*$/u

const numbers = /\d/

export const validateName = (name: string): Result<void, string> => {
  if (name === '' || name === ' ') {
    return Result.err('the name cannot be empty')
  }
  if (numbers.test(name)) {
    return Result.err('the name cannot contain numbers')
  }
  if (!valid.test(name)) {
    return Result.err('invalid characters')
  }
  if (name.length <= 1) {
    return Result.err('the name is too short')
  }
  if (name.length >= 50) {
    return Result.err('the name is too long')
  }
  return Result.ok(undefined)
}
