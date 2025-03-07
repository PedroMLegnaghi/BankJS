const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");
const Transfer = require("./Transfer.js");
const User = require("./User.js");
module.exports = class App {
  static #usersList = [];
  static getUsersList() {
    return this.#usersList;
  }
  static createUser(fullname, email) {
    if (App.findUserByEmail(email) != undefined) {
      return console.log("An user already exists with this email!");
    } else {
      const newUser = new User(fullname, email);
      this.#usersList.push(newUser);
      return console.log(
        `User ${newUser.getFullname()} registered successfully!`
      );
    }
  }
  static findUserByEmail(email) {
    const user = this.#usersList.find((user) => user.getEmail() === email);
    console.log(user);
    if (user != undefined) {
      console.log(`User ${user.getFullname()}found!`);
      return user;
    } else {
      return console.log("User not found!");
    }
  }
  static deposit(userEmail, depositAmount) {
    const user = this.findUserByEmail(userEmail);
    if (user instanceof User) {
      user.getAccount().makeNewDeposit(depositAmount);
      return console.log(
        `Deposit of ${depositAmount} made to ${user.getFullname()} successfully!`
      );
    }
  }
  static loan(userEmail, loanAmount, installments) {
    const user = this.findUserByEmail(userEmail);
    if (user instanceof User) {
      user.getAccount().makeNewLoan(loanAmount, installments);
      return console.log(
        `Loan of ${loanAmount} with ${installments} installments made to ${user.getFullname()} successfully!`
      );
    }
  }
  static transference(eventUserEmail, targetUserEmail, amountToTransfer) {
    const eventUser = this.findUserByEmail(eventUserEmail);
    const targetUser = this.findUserByEmail(targetUserEmail);
    if (eventUser instanceof User && targetUser instanceof User) {
      eventUser
        .getAccount()
        .makeNewTransference(eventUser, targetUser, amountToTransfer);
      return console.log(
        `Transferenmce of ${amountToTransfer} made from ${eventUser.getFullname()} to ${targetUser.getFullname()} successfully!`
      );
    }
  }

  static changeinterestRate(newInterestRate) {
    Loan.setInterestRate(newInterestRate);
    return console.log(
      `Interest rate changed to ${newInterestRate} successfully!`
    );
  }
};
