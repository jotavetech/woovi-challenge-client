import expirationDateNormalizer from "./expiration-date-normalizer";
import ccNumberNormalizer from "./cc-number-normalizer";
import cpfNormalizer from "./cpf-normalizer";

function normalize(type: string, value: string) {
  if (type === "cardNumber") return ccNumberNormalizer(value);
  if (type === "expirationDate") return expirationDateNormalizer(value);
  if (type === "cpf") return cpfNormalizer(value);
  return value;
}

export default normalize;
