import { ProfileService } from '../../src/user/services/v1/profile.service'

describe('user service calls', () => {
  const user = {
    name: 'john doe'
  }
  const repositoryMock = {
    get: jest.fn().mockResolvedValue(user),
    save: jest.fn(),
    restore: jest.fn()
  }
  let service: ProfileService
  beforeEach(() => {
    service = new ProfileService(repositoryMock)
  })

  test('service.getUser - should get the user and call once', async () => {
    const result = await service.get()
    expect(repositoryMock.get).toHaveBeenCalledTimes(1)
    expect(result).toBe(user)
  })

  test('service.saveUser - should save the user and call once', async () => {
    const req = {
      name: 'test'
    }
    const result = await service.update(req)
    expect(repositoryMock.save).toHaveBeenCalledTimes(1)
    expect(result.name).toBe('test')
  })

  test('service.restoreUser - should restore the user and call once', async () => {
    const result = await service.restore()
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
  let service: ProfileService
  beforeEach(() => {
    service = new ProfileService(repositoryMock)
  })
  test('should throw an exception with invalid name', async () => {
    await expect(service.update({ name: '.' })).rejects.toThrow('invalid characters')
  })
})
