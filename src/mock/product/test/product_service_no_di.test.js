const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// mock을 남용하는 사례
/**
 * 네트워크 상태에 의존하는 테스트는 좋지 않음
 *
 *  원하는것 : ProductService 테스트
 *  ProductService에서 어떤 다른 모듈(클래스)을 사용하든 그것들의 영향을 받지 않도록 나머지 모든 의존성에 대해서는 mock을 이용
 *
 *  ProductClient가 어떤 데이터를 리턴하는지 mockImplementation를 이용해서 어떤 함수를 호출했을때 어떤 데이터를 받아올 수 있는지 쉽게 컨트롤할수 있도록 설정
 */

jest.mock("../product_client"); // 가상의 목함수 생성
describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
