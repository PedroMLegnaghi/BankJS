import { Account } from "./Account.js";
export class User {
  #fullname;
  #email;
  #account;
  constructor(fullname, email) {
    this.#fullname = fullname;
    this.#email = email;
    this.#account = new Account();
  }
}
