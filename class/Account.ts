export abstract class Account {
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