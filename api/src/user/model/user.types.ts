export class User {
  private readonly _name: string

  constructor (name: string) {
    if (name === '') {
      this._name = 'User'
    } else {
      this._name = name
    }
  }

  get name (): string {
    return this._name
  }

  serialize (): string {
    return this._name
  }

  static deserealize (data: string): User {
    if (data === '') return new User('User')
    return new User(data)
  }
}
