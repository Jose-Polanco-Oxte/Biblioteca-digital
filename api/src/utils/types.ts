export class Result<T, E> {
  private constructor (
    public readonly ok: boolean,
    private readonly _value?: T,
    private readonly _error?: E
  ) {}

  static ok<T, E>(value: T): Result<T, E> {
    return new Result<T, E>(true, value)
  }

  static err<E>(error: E): Result<never, E> {
    return new Result<never, E>(false, undefined, error)
  }

  get value (): T {
    if (!this.ok) {
      throw new Error('No se puede acceder al valor de un resultado con error')
    }
    return this._value as T
  }

  get error (): E {
    if (this.ok) {
      throw new Error('No se puede acceder al error de un resultado exitoso')
    }
    return this._error as E
  }

  map<U>(fn: (value: T) => U): Result<U, E> {
    if (this.ok) return Result.ok(fn(this._value as T))
    return Result.err(this._error as E)
  }

  unwrapOr (defaultValue: T): T {
    return this.ok ? (this._value as T) : defaultValue
  }
}
