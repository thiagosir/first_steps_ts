function soma(a:number, b: number) {
  console.log(a+b)
}

soma(3, 1)


// Tipagem de variaveis

// Criando uma interface para 'Pessoa'
interface Pessoa {
  nome: string,
  idade: number,
  profissao?: string
}

const pessoa: Pessoa = {
  nome: 'Thiago',
  idade: 22
}
const outraPessoa: Pessoa = {
  nome: 'Babi',
  idade: 23
}

const arrayPessoa: Pessoa[] = [ // Array<Pessoa> é a mesma coisa de Pessoa[]
  pessoa,
  outraPessoa
]

const arrayNumber: number[] = [
  1,2,3
]

const arrayString: Array<string> = [
  'a', 'b', 'c'
]