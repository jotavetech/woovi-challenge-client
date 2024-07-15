// luhnAlgorithm from wikipedia
function validateCCNumber(ccNumber: string): boolean {
  const digits = ccNumber.replace(/\D/g, "").split("").map(Number);

  if (digits.length !== 16) {
    return false;
  }

  let sum = 0;
  let isSecond = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isSecond = !isSecond;
  }

  return sum % 10 === 0;
}

export default validateCCNumber;
