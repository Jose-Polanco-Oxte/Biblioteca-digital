import * as validator from '../../src/user/model/user.validator'
import invalidNames from '../assets/invalid.json'
import validNames from '../assets/valid.json'

describe('user name format validation', () => {
  test('should fail with an empty name', () => {
    const result = validator.validateName('')
    expect(result.ok).toBe(false)
    expect(result.error).toBe('the name cannot be empty')
  })
  test('should fail with an space as a name', () => {
    const result = validator.validateName('')
    expect(result.ok).toBe(false)
    expect(result.error).toBe('the name cannot be empty')
  })
  test('should fail with a short name [min: 1]', () => {
    const result = validator.validateName('w')
    expect(result.ok).toBe(false)
    expect(result.error).toBe('the name is too short')
  })
  test('should fail with a long name [max: 50]', () => {
    const result = validator.validateName('w'.repeat(50))
    expect(result.ok).toBe(false)
    expect(result.error).toBe('the name is too long')
  })
})

// This test may be removed
describe('invalid names', () => {
  test.each(invalidNames.names)('should reject invalid name: %s', (name) => {
    const result = validator.validateName(name)

    expect(result.ok).toBe(false)
  })
})

describe('valid names', () => {
  test.each(validNames.names)('should accept valid name: %s', (name) => {
    const result = validator.validateName(name)

    expect(result.ok).toBe(true)
  })
})
