export class Deposit {
  #dateOfDeposit;
  #amountToDepoist;
  constructor(amountToDeposit) {
    this.#amountToDepoist = amountToDeposit;
    this.#dateOfDeposit = new Date();
  }
  listProprieties() {
    return console.log(`dateOfDeposit: ${this.#dateOfDeposit}
  amountToDepoist: ${this.#amountToDepoist}
  `);
  }
}
