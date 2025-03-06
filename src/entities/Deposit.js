export class Deposit {
  #dateOfDeposit;
  #amountToDepoist;
  constructor(amountToDeposit) {
    this.#amountToDepoist = amountToDeposit;
    this.#dateOfDeposit = new Date();
  }
}
