export const NumberStrict = (value: unknown) => {
  const result = Number(value);
  if (isNaN(result)) {
    throw new Error(`Value '${value}' returns NaN on convert NumberStrict`);
  }
  return result;
};

export const parseIntStrict = (value: string, radix?: number) => {
  const result = parseInt(value, radix);
  if (isNaN(result)) {
    throw new Error(`Value '${value}' returns NaN on convert parseIntStrict`);
  }
  return result;
};

export const parseFloatStrict = (value: string) => {
  const result = parseFloat(value);
  if (isNaN(result)) {
    throw new Error(`Value '${value}' returns NaN on convert parseFloatStrict`);
  }
  return result;
};
