import { describe, it, expect } from 'vitest';
import { createDigitValidator } from '../src/core/createDigitValidator';

describe('createDigitValidator', () => {
  it('should return a function', () => {
    const validator = createDigitValidator(10);
    expect(typeof validator).toBe('function');
  });

  it('should accept decimal base (10): digits 0-9', () => {
    const isDecDigit = createDigitValidator(10);
    expect(isDecDigit('0')).toBe(true);
    expect(isDecDigit('9')).toBe(true);
    expect(isDecDigit('a')).toBe(false);
  });

  it('should accept binary base (2): digits 0-1', () => {
    const isBinDigit = createDigitValidator(2);
    expect(isBinDigit('0')).toBe(true);
    expect(isBinDigit('1')).toBe(true);
    expect(isBinDigit('2')).toBe(false);
  });

  it('should accept octal base (8): digits 0-7', () => {
    const isOctDigit = createDigitValidator(8);
    expect(isOctDigit('0')).toBe(true);
    expect(isOctDigit('7')).toBe(true);
    expect(isOctDigit('8')).toBe(false);
  });

  describe('should accept hexadecimal base (16):', () => {
    const isHexDigit = createDigitValidator(16);

    it('should be digits 0-9 and letters a-f', () => {
      expect(isHexDigit('0')).toBe(true);
      expect(isHexDigit('9')).toBe(true);
      expect(isHexDigit('10')).toBe(false);
      expect(isHexDigit('a')).toBe(true);
      expect(isHexDigit('f')).toBe(true);
      expect(isHexDigit('g')).toBe(false);
    });

    it('should accept letters uppercase A-F', () => {
      expect(isHexDigit('A')).toBe(true);
      expect(isHexDigit('F')).toBe(true);
      expect(isHexDigit('G')).toBe(false);
    });
  });

  it('should reject empty strings and multi-character strings', () => {
    const isDecDigit = createDigitValidator(10);

    expect(isDecDigit('')).toBe(false);
    expect(isDecDigit('12')).toBe(false);
    expect(isDecDigit(' ')).toBe(false);
  });
});
