function ccNumberNormalizer(value: string) {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ") || ""
  );
}

export default ccNumberNormalizer;
