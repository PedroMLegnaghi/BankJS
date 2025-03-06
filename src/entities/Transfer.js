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
}
