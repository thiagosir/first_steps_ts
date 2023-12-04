// const num: number = 13

// if (num > 15) {
//   console.log('numero maior que 15')
// } else {
//   console.log('numero menor que 15')
// }

// const typeUser = {
//   admin: 'seja bem  vindo admin',
//   student: 'vc é estudante',
//   viewer: 'vc pode visualizar'
// }

// const usuario = 'admin'

// function validateUser(user: string) {
//   return console.log(typeUser[user as keyof typeof typeUser])
// }

// validateUser(usuario);

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }


// Arrays

const array: Array<number> = [1, 2, 3, 4, 5];

const stringArray: string[] = ['a', 'b', 'c'];

// forEach pedrada dms
array.forEach(num => {
  if (num > 1 && num % 2 === 0) {
    console.log(num * 2)
  }
});


// retorna exatamente o primeiro a responder a condição, nesse caso foi o numero 2.
// const buscaNum = array.find(num => num > 1); 
// console.log(buscaNum);