const maca = {
  value: 2,
}
const laranja = {
  value: 3,
}

function mapWithThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const numeros = [1, 2, 4, 5, 6, 8, 33, 26, 45];

function mapThis(arr) {
  return arr.map(function(item) {
    return item * 2;
  })
}

function filtraPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0;
}

function somaNumeros(arr) {
  return arr.reduce(function(prev, current) {
    return prev + current;
  });
}

const lista = [
  {
    name: "Sabão em Pó",
    preco: 30
  },
  {
    name: "Cereal",
    preco: 12
  },
  {
    name: "Toalha",
    preco: 30
  }
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function(prev, current) {
    return prev - current.preco;
  }, saldoDisponivel)
}

// console.log(mapThis(numeros));
// console.log('This => Maça: ', mapWithThis(numeros, maca));
// console.log('This => Laranja: ', mapWithThis(numeros, laranja));
// console.log(filtraPares(numeros));
// console.log(somaNumeros(numeros));
console.log(calculaSaldo(saldoDisponivel, lista));