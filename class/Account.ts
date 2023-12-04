export abstract class Account {
  private name: string
  saldo: number = 0
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Voce alterou o nome')
  }

  getName = (): string => {
    return this.name;
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