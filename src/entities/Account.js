export class Account {
  //only changeable by deposit transfer and loan
  #balance = 0;
  #depositArray = [];
  #loansArray = [];
  #transferencesArray = [];
  constructor() {}
}
//makeNewDeposit(add to balance de deposit value and add the deposit status in "depositsMade")
//makeNewLoan(add the value of loan to the balance and add the loan to "loansReceived")
//transference (verify wheter the transference was made by the account owner or received by it)
// if (received) add value to balance and add it to "transferencesArray"
//if(made) debt from balance and add it to "transferencesArray"
