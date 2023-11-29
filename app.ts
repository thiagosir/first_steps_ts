// Dio Banking

class User {
  name: string = 'Thiago'
  accountNumber: number = 138199
  saldo: number = 0

  constructor(saldo: number){
    this.saldo = saldo
  }

  withdraw = (quantity: number) => {
    if (quantity > this.saldo) {
      return console.log('Saldo Insuficiente');
    } else {
      const balance = this.saldo - quantity;
      return console.log(`Dinheiro sacado:  ${quantity} \nSaldo restante ${balance}`);
    }
  }
}

const saque = new User(5000)
saque.withdraw(1500);
