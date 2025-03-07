module.exports = class Installment {
  #installmentPrice;
  #numberOfInstallments;
  constructor(numberOfInstallments, amountLoaned) {
    this.#numberOfInstallments = numberOfInstallments;
    this.calculate(amountLoaned);
  }
  calculate(amountLoaned, numberOfInstallments) {
    this.#installmentPrice = amountLoaned / numberOfInstallments;
  }

  getInstallmentPrice() {
    return this.#installmentPrice;
  }
  getNumberOfInstallments() {
    return this.#numberOfInstallments;
  }
  listProprieties() {
    return console.log(`installmentPrice: ${this.#installmentPrice}
  numberOfInstallments: ${this.#numberOfInstallments}
  `);
  }
};
