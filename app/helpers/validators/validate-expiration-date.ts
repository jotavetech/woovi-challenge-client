function validateExpirationDate(expirationDate: string): boolean {
  if (expirationDate.length < 5) return false;

  const date = expirationDate.split("/");

  if (date.length !== 2) return false;

  const actualMonth = new Date().getMonth() + 1;
  const actualYear = new Date().getFullYear();

  const month = parseInt(date[0]);
  const year = parseInt(date[1]);

  if (month < 1 || month > 12) return false;
  if (year < actualYear) return false;
  if (year === actualYear && month < actualMonth) return false;

  return true;
}
