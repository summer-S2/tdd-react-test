const Calculator = require("../calculator.js");

/**
 * 동기 테스트
 * 각각의 테스트는 서로 독립적이어야 함
 */

describe("Calculator", () => {
  let cal;
  // 각 테스트를 수행하기 전 실행됨
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);

    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();

    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  // 에러 테스트
  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtracts", () => {
    cal.subtract(1);

    expect(cal.value).toBe(-1);
  });

  it("multiply", () => {
    cal.set(5);
    cal.multiply(4);

    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
