// Exercicio 1

// let a = 5;
// let b = 15;

// let adicao = a + b;
// console.log(adicao);

// let subtracao = a - b;
// console.log(subtracao);

// let multiplicacao = a * b;
// console.log(multiplicacao);

// let divisao = a / b;
// console.log(divisao);

// let modulo = a % b;
// console.log(modulo);

// Exercicio 2

// let number1 = 10;
// let number2 = 15;

// if(number1 > number2) {
//     console.log("numero 1 é maior")
// } else {
//     console.log("numero 2 é maior")
// };

// Exercicio 3

// let c = 3;
// let d = 2;
// let e = 5;

// if(c > d && c > e) {
//     console.log("numero c é o maior")
// } else if (d > c && d > e) {
//     console.log('numero d é o maior')
// } else {
//     console.log('numero e é o maior')
// }

// Exercicio 4

// const number3 = 10;

// if(number3 % 2 > 0) {
//     console.log('positive')
// } else if(number3 % 2 < 0) {
//     console.log('negative')
// } else {
//     console.log('zero')
// }

// Exercicio 5

// const angulo1 = 100;
// const angulo2 = 20;
// const angulo3 = 60;
// let triangulo = angulo1 + angulo2 + angulo3;

// if(triangulo = 180) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Exercicio 6
// (ESTUDAR ESSE)
// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };(ESTUDAR ESSE)

// Exercicio 7

// const grade = 76;

// if (grade < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// Exercicio 8


// const a = 1;
// const b = 3;
// const c = 5;

// let isEven = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   isEven = true;
// };
// console.log(isEven);

// Exercicio 9

// const a = 1;
// const b = 3;
// const c = 5;

// let isOdd = false;

// if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//   isOdd = true;
// };
// console.log(isOdd);

// Exercicio 10


// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };

// Exercicio 11


// let aliquotINSS;
// let aliquotIR;

// const grossSalary = 2000.00;

// if (grossSalary <= 1556.94) {
//   aliquotINSS = grossSalary * 0.08;
// } else if (grossSalary <= 2594.92) {
//   aliquotINSS = grossSalary * 0.09;
// } else if (grossSalary <= 5189.82) {
//   aliquotINSS = grossSalary * 0.11;
// } else {
//   aliquotINSS = 570.88;
// }

// const baseSalary = grossSalary - aliquotINSS;

// if (baseSalary <= 1903.98) {
//   aliquotIR = 0;
// } else if (baseSalary <= 2826.65) {
//   aliquotIR = (baseSalary * 0.075) - 142.80;
// } else if (baseSalary <= 3751.05) {
//   aliquotIR = (baseSalary * 0.15) - 354.80;
// } else if (baseSalary <= 4664.68) {
//   aliquotIR = (baseSalary * 0.225) - 636.13;
// } else {
//   aliquotIR = (baseSalary * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalary - aliquotIR));
