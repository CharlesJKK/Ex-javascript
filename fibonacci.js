//Não precisa chamar a função e adicionar valor, pois isso é feito mais abaixo sozinho.

function seqFibonacci(seq) {
  if (seq < 0) {
    return null;
  } else if (seq === 0) {
    return 0;
  } else if (seq === 1) {
    return 1;
  } else {
    return seqFibonacci(seq - 1) + seqFibonacci(seq - 2);
  }
}

const number = 2; //Aqui você insere o número que você quer saber se está na sequência de fibonacci.
const fibonacciArray = [];

for (let i = 0; i <= number; i++) {
  fibonacciArray.push(seqFibonacci(i));
}

if (fibonacciArray.includes(Number(number))) {
  console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`);
}