enum keyTypes {
  TOKEN = "token",
}

export class UtilStorage {
  static setToken(token: string | null) {
    if (token) {
      window.localStorage.setItem(keyTypes.TOKEN, token);
    } else {
      window.localStorage.removeItem(keyTypes.TOKEN);
    }
  }
  static getToken() {
    return window.localStorage.getItem(keyTypes.TOKEN);
  }
}
