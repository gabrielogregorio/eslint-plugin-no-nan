import { NumberStrict, parseFloatStrict, parseIntStrict } from './utils';

describe('NumberStrict', () => {
  it('should transform strings in number', () => {
    expect(NumberStrict('10')).toStrictEqual(10);
    expect(NumberStrict('10.2')).toStrictEqual(10.2);
    expect(NumberStrict('-230')).toStrictEqual(-230);
  });

  it('should throw error on returns NaN', () => {
    expect(() => NumberStrict('x2')).toThrow("Value 'x2' returns NaN on convert NumberStrict");
  });
});

describe('parseIntStrict', () => {
  it('should transform strings in number', () => {
    expect(parseIntStrict('10')).toStrictEqual(10);
    expect(parseIntStrict('10.2')).toStrictEqual(10);
    expect(parseIntStrict('-230.19')).toStrictEqual(-230);
  });

  it('should throw error on returns NaN', () => {
    expect(() => parseIntStrict('x2')).toThrow("Value 'x2' returns NaN on convert parseIntStrict");
  });
});

describe('parseFloatStrict', () => {
  it('should transform strings in number', () => {
    expect(parseFloatStrict('10')).toStrictEqual(10);
    expect(parseFloatStrict('10.2012')).toStrictEqual(10.2012);
    expect(parseFloatStrict('-230')).toStrictEqual(-230);
  });

  it('should throw error on returns NaN', () => {
    expect(() => parseFloatStrict('x2')).toThrow("Value 'x2' returns NaN on convert parseFloatStrict");
  });
});
