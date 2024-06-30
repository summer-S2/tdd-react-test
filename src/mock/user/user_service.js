class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLoggedIn = false;
  }

  login(id, password) {
    // 네트워크를 사용하는 로직을 userClient로 분리한 이유는 단위테스트할때 분리된 로직으로 해야하기 떄문
    // return fetch("http://example.com/login/id+password")
    // .then(
    //   (response) => response.json
    // );
    if (!this.isLoggedIn) {
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLoggedIn = true));
    }
  }
}

module.exports = UserService;
