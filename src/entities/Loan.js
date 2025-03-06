import { Installment } from "./Installment.js";
export class Loan {
  static #interestRate = 0;
  #dateOfLoan;
  #amountToLoan;
  #installments;
  #situationOfLoanPayment;
  constructor(amountToLoan, installments) {
    this.#installments = new Installment(installments, amountToLoan);
    this.#amountToLoan = amountToLoan;
    this.#situationOfLoanPayment = {
      priceInDebt: amountToLoan,
      situation: false,
    };
    this.#dateOfLoan = new Date();
  }
  //after every installment payment, verify situation!
  verifySituation() {
    if (this.#situationOfLoanPayment.priceInDebt > 0) {
      console.log(
        `PENDENT: 
        Installment price:${this.#installments.getInstallmentPrice()}
        Number of installments:${this.#installments.getNumberOfInstallments()}
        You still have $${this.#situationOfLoanPayment.priceInDebt} in debt`
      );
    } else {
      this.#situationOfLoanPayment.situation = true;
      console.log(`PAID: You've paid off your debt`);
    }
  }
  getDateOfLoan() {
    return this.#dateOfLoan;
  }
  getAmountToLoan() {
    return this.#amountToLoan;
  }

  static getInterestRate() {
    return this.#interestRate;
  }

  static setInterestRate(newInterestRate) {
    // console.log(newInterestRate);
    // console.log(typeof newInterestRate);
    if (typeof newInterestRate === "string") {
      this.#interestRate += newInterestRate / 100;
      return console.log(`essa e a interestRate${this.#interestRate}`);
    } else {
      return console.log("Digite um valor numerico ");
    }
  }
}
const a = new Loan(0, 10);
console.log(a.getAmountToLoan());
console.log(a.getDateOfLoan());
console.log(a.verifySituation());
