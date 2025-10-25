import { UserService } from '../../src/user/services/v1/user.service'

describe('user service calls', () => {
  const user = {
    name: 'john doe'
  }
  const repositoryMock = {
    get: jest.fn().mockResolvedValue(user),
    save: jest.fn(),
    restore: jest.fn()
  }
  let service: UserService
  beforeEach(() => {
    service = new UserService(repositoryMock)
  })

  test('service.getUser - should get the user and call once', async () => {
    const result = await service.getUser()
    expect(repositoryMock.get).toHaveBeenCalledTimes(1)
    expect(result).toBe(user)
  })

  test('service.saveUser - should save the user and call once', async () => {
    const req = {
      name: 'test'
    }
    const result = await service.saveUser(req)
    expect(repositoryMock.save).toHaveBeenCalledTimes(1)
    expect(result.name).toBe('test')
  })

  test('service.restoreUser - should restore the user and call once', async () => {
    const result = await service.restoreUser()
    expect(repositoryMock.save).toHaveBeenCalledTimes(1)
    expect(result.name).toBe('User')
  })
})

describe('invalid name', () => {
  const user = {
    name: 'john doe'
  }
  const repositoryMock = {
    get: jest.fn().mockResolvedValue(user),
    save: jest.fn(),
    restore: jest.fn()
  }
  let service: UserService
  beforeEach(() => {
    service = new UserService(repositoryMock)
  })
  test('should throw an exception with invalid name', async () => {
    await expect(service.saveUser({ name: '' })).rejects.toThrow('the name cannot be empty')
  })
})
