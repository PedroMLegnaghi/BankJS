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
  getAccount() {
    return this.#account;
  }
  getFullname() {
    return this.#fullname;
  }
  getEmail() {
    return this.#email;
  }
}
// const pedro = new User("Pedro", "pedrox");
// const fernando = new User("fernando", "fernandox");

// pedro.getAccount().makeNewDeposit(1000);
// fernando.getAccount().makeNewDeposit(1000);

// pedro.getAccount().makeNewTransference(pedro, fernando, 200);
// fernando.getAccount().makeNewTransference(fernando, pedro, 200);
// pedro.getAccount().makeNewLoan(1000, 5);
// console.log(`Pedro balance ${pedro.getAccount().getBalance()}
// Pedro depositArray ${pedro.getAccount().getDepositArray()}
// Pedro loanArrray ${pedro.getAccount().getLoansArray()}
// Pedro trasnferencesArray ${pedro.getAccount().getTrasnferencesArray()}`);
// console.log(`fernando balance ${fernando.getAccount().getBalance()}
// fernando depositArray ${fernando.getAccount().getDepositArray()}
// fernando loanArrray ${fernando.getAccount().getLoansArray()}
// fernando trasnferencesArray ${fernando.getAccount()?.getTrasnferencesArray()}`);
