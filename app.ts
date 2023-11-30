// // Dio Banking

// class Balance {
//   saldo: number = 0

//   constructor(saldo: number){
//     this.saldo = saldo
//   }

//   withdraw = (quantity: number) => {
//     if (quantity > this.saldo) {
//       return console.log('Saldo Insuficiente');
//     } else {
//       const balance = this.saldo - quantity;
//       return console.log(`Dinheiro sacado:  ${quantity} \nSaldo restante ${balance}`);
//     }
//   }
// }

// const saque = new Balance(5000)
// saque.withdraw(1500);

abstract class Account {
  name: string
  saldo: number = 0
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (quantity: number) => {
    this.saldo += quantity
    console.log(`Você depositou: ${quantity} reais`)
  }

  withdraw = (quantity: number) => {
    if (quantity > this.saldo) {
      return console.log('Saldo Insuficiente');
    } else {
      this.saldo -= quantity;
      return console.log(`Dinheiro sacado: ${quantity} reais`);
    }
  }

  getBalance = () => {
    console.log(`Seu saldo é de: ${this.saldo} reais`)
  }

}

class PeopleAccount extends Account {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber)
    this.doc_id = doc_id
  }
}

const account: PeopleAccount = new PeopleAccount(1, 'Thiago', 125)
console.log(account)
account.deposit(5000)
account.withdraw(2500)
account.getBalance()
