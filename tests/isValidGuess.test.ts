import { describe, it, expect } from 'vitest';
import { isValidGuess } from '../src/core/isValidGuess';

describe('isValidGuess', () => {
  it('should return true for a valid decimal guess', () => {
    expect(isValidGuess('1234', 4, 10)).toBe(true);
  });

  it('should reject guess with incorrect length', () => {
    expect(isValidGuess('12', 4, 10)).toBe(false);
    expect(isValidGuess('12325', 4, 10)).toBe(false);
    expect(isValidGuess('', 4, 10)).toBe(false);
  });

  it('should reject duplicate digits', () => {
    expect(isValidGuess('1233', 4, 10)).toBe(false);
    expect(isValidGuess('3123', 4, 10)).toBe(false);
  });

  it('should treat hex letters as case-insensitive when checking duplicates', () => {
    expect(isValidGuess('1aA2', 4, 16)).toBe(false);
  });

  it('should accept valid hex guesses with mixed case', () => {
    expect(isValidGuess('1aB3', 4, 16)).toBe(true);
  });

  it('should reject guesses with invalid characters for the base', () => {
    expect(isValidGuess('123a', 4, 10)).toBe(false);
    expect(isValidGuess('0102', 4, 2)).toBe(false);
    expect(isValidGuess('123g', 4, 16)).toBe(false);
  });
});
