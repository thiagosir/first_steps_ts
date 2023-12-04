import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

// Dio Banking //

const account: PeopleAccount = new PeopleAccount(1, 'Thiago', 125)

console.log(account.getName())
account.setName('Thiago Bento')
console.log(account.getName())
// console.log(account)
// account.deposit(5000)
// account.withdraw(2500)
// account.getBalance()

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount)