import { User } from '../../src/user/model/user.types'

describe('user creation', () => {
  test('should create an User instance with name "User" when name is empty', () => {
    const user: User = new User('')
    expect(user.name).toBe('User')
  })
})

describe('user serialize', () => {
  test('should return "User" when serialize an user with empty name', () => {
    const user: User = new User('')
    expect(user.serialize()).toBe('User')
  })
})

describe('user deserialize', () => {
  test('should deserialize an user with name "User" when data is empty', () => {
    const expected: User = new User('User')
    const data = ''
    expect(User.deserealize(data).name).toBe(expected.name)
  })
})
