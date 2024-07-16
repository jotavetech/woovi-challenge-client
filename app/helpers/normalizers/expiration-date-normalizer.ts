function expirationDateNormalizer(expirationDate: string) {
  return (
    expirationDate.replace(/[^\d/]/g, "").replace(/(\d{2})(\d{4})/, "$1/$2") ||
    ""
  );
}

export default expirationDateNormalizer;
