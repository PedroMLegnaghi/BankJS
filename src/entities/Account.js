const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");
const Transfer = require("./Transfer.js");
module.exports = class Account {
  //only changeable by deposit transfer and loan
  #balance = 0;
  #depositArray = [];
  #loansArray = [];
  #transferencesArray = [];
  constructor() {}
  get() {
    return {
      balance: this.#balance,
      depositArray: this.#depositArray,
      loansArray: this.#loansArray,
      transferencesArray: this.#transferencesArray,
    };
  }
  setBalance(amountToAdd) {
    this.#balance += amountToAdd;
  }
  getBalance() {
    return this.#balance;
  }
  getTrasnferencesArray() {
    return this.#transferencesArray;
  }
  setTrasnferencesArray(transference) {
    this.#transferencesArray.push(transference);
  }
  getDepositArray() {
    return this.#depositArray;
  }
  getLoansArray() {
    return this.#depositArray;
  }
  makeNewDeposit(depositValue) {
    const deposit = new Deposit(depositValue);
    this.#balance += depositValue;
    this.#depositArray.push(deposit);
  }
  //makeNewLoan(add the value of loan to the balance and add the loan to "loansReceived")
  makeNewLoan(amountToLoan, installments) {
    const loan = new Loan(amountToLoan, installments);
    this.#balance += amountToLoan;
    this.#loansArray.push(loan);
  }
  //transference (verify wheter the transference was made by the account owner or received by it)
  makeNewTransference(eventUser, targetUser, amountToTransfer) {
    const eventUserTransference = new Transfer(
      eventUser,
      targetUser,
      amountToTransfer * -1
    );
    const targetUserTransference = new Transfer(
      eventUser,
      targetUser,
      amountToTransfer
    );
    if (eventUser.getAccount() === this) {
      this.#balance -= amountToTransfer;
      targetUser.getAccount().setBalance(amountToTransfer);
      this.setTrasnferencesArray([eventUserTransference]);
      targetUser.getAccount().setTrasnferencesArray([targetUserTransference]);
    } else
      console.log("ERROR: You can't make a transference from another account");
  }
  // if (received) add value to balance and add it to "transferencesArray"
  //if(made) debt from balance and add it to "transferencesArray"
};
