import { User } from "./User.js";
import { Loan } from "./Loan.js";
class App {
  static #usersList = [];
  static getUsersList() {
    return this.#usersList;
  }
  static createUser(fullname, email) {
    if (
      this.#usersList.find((user) => user.getEmail() === email) != undefined
    ) {
      return console.log("An user already exists with this email!");
    } else {
      const newUser = new User(fullname, email);
      this.#usersList.push(newUser);
      return console.log("User registered successfully!");
    }
  }
  static findUserByEmail(email) {
    const user = this.#usersList.find((user) => user.getEmail() === email);
    console.log(user);
    if (user != undefined) {
      return console.log(user);
    } else {
      return console.log("User not found!");
    }
  }
  static depoisit(userEmail, depositAmount) {
    const user = this.findUserByEmail(userEmail);
    user.getAccount().makeNewDeposit(depositAmount);
    return console.log(
      `Deposit of ${depositAmount} made to ${user.getFullname()} successfully!`
    );
  }
  static loan(userEmail, loanAmount, installments) {
    const user = this.findUserByEmail(userEmail);
    user.getAccount().makeNewLoan(loanAmount, installments);
    return console.log(
      `Loan of ${loanAmount} with ${installments} installments made to ${user.getFullname()} successfully!`
    );
  }
  static transference(eventUserEmail, targetUserEmail, amountToTransfer) {
    const eventUser = this.findUserByEmail(eventUserEmail);
    const targetUser = this.findUserByEmail(targetUserEmail);
    eventUser
      .getAccount()
      .makeNewTransference(eventUser, targetUser, amountToTransfer);
    return console.log(
      `Transferenmce of ${amountToTransfer} made from ${eventUser.getFullname()} to ${targetUser.getFullname()} successfully!`
    );
  }

  static changeinterestRate(newInterestRate) {
    Loan.setInterestRate(newInterestRate);
    return console.log(
      `Interest rate changed to ${newInterestRate} successfully!`
    );
  }
}

App.createUser("Pedro", "pedrox");
App.createUser("Fernando", "fernandox");
App.getUsersList();
App.createUser("Fernando", "fernandox");
App.findUserByEmail("pedrox");

// App.changeinterestRate(10);
// App.depoisit("pedrox", 1000);
// App.loan("fernandox", 1000, 5);
// App.transference("pedrox", "fernandox", 200);
