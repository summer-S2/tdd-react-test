/**
 * 비동기 테스트
 */

const fetchProduct = require("../async.js");

describe("Async", () => {
  // 방법 1 : done 사용 (비추천)
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  // 방법 2 : return 사용 (코드도 깔끔하고 done 보다 더 빠름)
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  // 방법 3 : await 사용
  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  // 방법 4 : resolve 사용
  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  // 방법 5 : rejects 사용
  it("async - rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
