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

class Account {
  name: string
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = () => {
    console.log('Voce depositou')
  }

  withdraw = () => {
    console.log('Voce sacou')
  }
}

class Admin extends Account {
  saldo: number

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
    this.saldo = 20
  }

  getValue = () => {
    console.log(this.saldo)
  }
}

const adminAccount = new Admin('Thiago', 125)
console.log(adminAccount)

const account: Account = new Account('Thiago', 1258)
console.log(account)
