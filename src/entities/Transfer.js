export class Transfer {
  #dateOfTransfer;
  #amountToTransfer;
  #eventUser;
  #targetUser;

  constructor(eventUser, targetUser, amountToTransfer) {
    this.#eventUser = eventUser;
    this.#targetUser = targetUser;
    this.#amountToTransfer = amountToTransfer;
    this.#dateOfTransfer = new Date();
  }
  getDateOfTransfer() {
    return this.#dateOfTransfer;
  }
  getAmountToTransfer() {
    return this.#amountToTransfer;
  }
  getEventUser() {
    return this.#eventUser;
  }
  getTargetUser() {
    return this.#targetUser;
  }
  listProprieties() {
    return console.log(`eventUser: ${this.getEventUser()}
  targetUser: ${this.getTargetUser()}
  amountToTransfer: ${this.getAmountToTransfer()}
  dateOfTransfer: ${this.getDateOfTransfer()}`);
  }
}
// const transfer = new Transfer("Pedro", "Fernando", 200);
// console.log(transfer.listProprieties());
