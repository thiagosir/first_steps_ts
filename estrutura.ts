// const num: number = 13

// if (num > 15) {
//   console.log('numero maior que 15')
// } else {
//   console.log('numero menor que 15')
// }

const typeUser = {
  admin: 'seja bem  vindo admin',
  student: 'vc é estudante',
  viewer: 'vc pode visualizar'
}

const usuario = 'admin'

function validateUser(user: string) {
  return console.log(typeUser[user as keyof typeof typeUser])
}

validateUser(usuario);

for (let i = 0; i < 10; i++) {
  console.log(i)
}