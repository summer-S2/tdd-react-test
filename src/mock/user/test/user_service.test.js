const UserService = require("../user_service.js");
const UserClient = require("../user_client.js");

// 행동을 검사할때는 mock을 사용함

jest.mock("../user_client.js");

describe("UserService", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return { login };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  // 로그인 1회 시도
  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abx");
    expect(login.mock.calls.length).toBe(1);
  });

  // 로그인 2회 시도
  it("should not call any() on UserClient again if already logged in", async () => {
    await userService.login("abc", "abx");
    await userService.login("abc", "abx");

    expect(login.mock.calls.length).toBe(1);
  });
});
