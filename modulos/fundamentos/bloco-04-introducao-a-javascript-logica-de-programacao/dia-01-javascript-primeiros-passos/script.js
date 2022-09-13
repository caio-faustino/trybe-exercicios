// constantes requisitos 01 ~ 03

let a = 10;
let b = 30;
let c = 20;

// requisito 01

var adicao = a + b;
var subtracao = a - b;
var multiplicacao = a * b;
var divisao = a / b;
var modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

// requisito 02

if (a>b) {
	console.log("a é maior que b");
} else {
	console.log("b é maior que a");
}

// requisito 03

if (a>b && a>c) {
	console.log("a é maior de todos");
} if (b>a && b>c) {
	console.log("b é maior de todos");
} else {
	console.log("c é maior de todos");
}

// requisito 04

const number = 4;

if (number > 0) {
	console.log("positive");
} else if (number < 0){
	console.log("negative");
} else {
	console.log("zero");
}

// requisito 05

let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 45;

let somaAngulos = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
	if (somaAngulos === 180) {
		console.log(true);    
	} else {
		console.log(false);
	}
    
} else {
	console.log("invalido");
}

// requisito 06

let chessPiece = "Rei";

switch(chessPiece.toLocaleLowerCase()) {
case "bispo": console.log("Bispo-> Diagonal.");
	break;
case "rei": console.log("Rei-> Uma casa apenas para qualquer direção.");
	break;
case "rainha": console.log("Rainha-> Diagonal, horizontal e vertical.");
	break;
case "cavalo": console.log("Cavalo -> \"L\" pode pular sobre as peças.");
	break;
default: console.log("erro: peça invalida");
	break;
}

// requisito 07

let nota = 75;

if (nota < 0 || nota > 100) {
	console.log("erro");
} else if (nota >= 90) {
	console.log("A");
} else if (nota >= 80) {
	console.log("B");
} else if (nota >= 70) {
	console.log("C");
} else if (nota >= 60) {
	console.log("D");
} else if (nota >= 50) {
	console.log("E");
} else {console.log("F");

}

// requisito 08

const numb1 = 7;
const numb2 = 193;
const numb3 = 888;

let ePar = false;

if ((numb1 % 2 === 0 || numb2 % 2 === 0 || numb3 % 2 === 0)) {
	ePar = true;
}
console.log(ePar);

// requisito 09

const n1 = 79;
const n2 = 344;
const n3 = 1028;

let eImpar = false;

if ((n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0)) {
	eImpar = true;
}
console.log(eImpar);

// requisito 10

const custo = 15;
const venda = 25;

let qtd = 1000;
let imposto = 0.2;

if (custo >= 0 && venda >=0) {
	const custoTotal = custo * (1+imposto);
	const lucroTotal = (venda - custoTotal) * qtd;
	console.log(lucroTotal);
} else {
	console.log("erro: valores negativos");
}

// requisito 11

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
	aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
	aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
	aliquotINSS = grossSalary * 0.11;
} else {
	aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
	aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
	aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
	aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
	aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
	aliquotIR = (baseSalary * 0.275) - 869.36;
}

console.log("Salário: " + (baseSalary - aliquotIR));
