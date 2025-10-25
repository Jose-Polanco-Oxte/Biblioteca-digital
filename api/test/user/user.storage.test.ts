import * as fileService from '../../src/utils/file.service'
import { USER_DATA } from '../../src/dev.vars'
import { UserStorage } from '../../src/user/data/user.storage'
import { User } from '../../src/user/model/user.types'

const path = `${USER_DATA}user_test.txt`

describe('user storage when the file not exist', () => {
  let storage: UserStorage
  beforeEach(async () => {
    await fileService.deleteFile(path)
    storage = new UserStorage(path)
  })
  afterAll(async () => {
    await fileService.deleteFile(path)
  })
  test('get - should create a new user with the name "User" and return this', async () => {
    const result = await storage.get()
    expect(result.name).toBe('User')
  })
  test('save - should create a new user', async () => {
    await storage.save(new User('Pepe'))
    const verify = await storage.get()
    expect(verify.name).toBe('Pepe')
  })
  test('restore - should restore the user name to "User"', async () => {
    await storage.restore()
    const verify = await storage.get()
    expect(verify.name).toBe('User')
  })
})

describe('user storage when the file exists and there is already a name', () => {
  let storage: UserStorage
  beforeEach(async () => {
    await fileService.writeFile(path, 'test')
    storage = new UserStorage(path)
  })
  afterAll(async () => {
    await fileService.deleteFile(path)
  })
  test('get - should get the user', async () => {
    const result = await storage.get()
    expect(result.name).toBe('test')
  })
  test('save - should update the user', async () => {
    await storage.save(new User('bruno'))
    const verify = await storage.get()
    expect(verify.name).toBe('bruno')
  })
  test('restore - should restore the user name to "User"', async () => {
    await storage.restore()
    const verify = await storage.get()
    expect(verify.name).toBe('User')
  })
})

describe('user storage when the file exists and is empty', () => {
  let storage: UserStorage
  beforeEach(async () => {
    await fileService.writeFile(path, '')
    storage = new UserStorage(path)
  })
  afterAll(async () => {
    await fileService.deleteFile(path)
  })
  test('get - should get an user with name "User"', async () => {
    const result = await storage.get()
    expect(result.name).toBe('User')
  })
  test('save - should create an user with name "User"', async () => {
    await storage.save(new User('bruno'))
    const verify = await storage.get()
    expect(verify.name).toBe('bruno')
  })
  test('restore - should restore the user name to "User"', async () => {
    await storage.restore()
    const verify = await storage.get()
    expect(verify.name).toBe('User')
  })
})
