export type DigitValidator = (char: string) => boolean;
const ALL_DIGITS = '0123456789abcdef';

export function createDigitValidator(base: number): DigitValidator {
  const allowedDigits = ALL_DIGITS.slice(0, base);
  return (char: string): boolean => {
    if (char.length !== 1) {
      return false;
    }
    return allowedDigits.includes(char.toLowerCase());
  };
}
