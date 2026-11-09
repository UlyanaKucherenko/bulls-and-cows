export type DigitValidator = (char: string) => boolean;

export function createDigitValidator(_base: number): DigitValidator {
  return (_char: string) => {
    return false;
  };
}
