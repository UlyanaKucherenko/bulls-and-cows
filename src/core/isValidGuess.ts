import { createDigitValidator } from './createDigitValidator.js';

export function isValidGuess(guess: string, length: number, base: number): boolean {
  if (guess.length !== length) {
    return false;
  }

  const isDigitValid = createDigitValidator(base);
  const allCharsValid = [...guess].every((char) => isDigitValid(char));
  if (!allCharsValid) {
    return false;
  }

  const uniqueDigits = new Set(guess.toLowerCase());
  return uniqueDigits.size === length;
}
