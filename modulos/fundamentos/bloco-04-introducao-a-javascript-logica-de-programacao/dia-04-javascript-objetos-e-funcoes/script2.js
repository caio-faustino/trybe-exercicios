// requisito 01

function verificaPalindrome(word) {
	for(index in word) {
		if (word[index] != word[(word.length - 1)- index]) {
			return false;
		}
	}
	return true;
}

console.log(verificaPalindrome("arara")); 
console.log(verificaPalindrome("desenvolvimento")); 
console.log(verificaPalindrome("girafarig"));

// segundo modo de resolução

function verificaPalindrome(string) {
	let reverse = string.split("").reverse().join("");
	if (reverse === string) {
		return true;
	} else {
		return false;
	}
}

console.log(verificaPalindrome("arara")); 
console.log(verificaPalindrome("desenvolvimento")); 
console.log(verificaPalindrome("girafarig"));

// requisito 02

function indiceDoMaior(numeros) {
	let indiceMaior = 0;
	for (let indice in numeros) {
		if (numeros[indiceMaior] < numeros[indice]) {
			indiceMaior = indice;
		}
	}

	return indiceMaior;
}

console.log(indiceDoMaior([1,8,3,10,99])); 

// requisito 03

function indiceDoMenor(numeros) {
	let indiceMenor = 0;
	for (let indice in numeros) {
		if (numeros[indiceMenor] > numeros[indice]) {
			indiceMenor = indice;
		}
	}

	return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); 

// requisito 04

function maiorPalavra(palavras) {
	let maiorPalavra = palavras[0];
	for (let indice in palavras) {
		if (maiorPalavra.length < palavras[indice].length) {
			maiorPalavra = palavras[indice];
		}
	}

	return maiorPalavra;
}

console.log(maiorPalavra(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])); 

// requisito 05

function maisRepetido(numeros) {
	let num = {};

	for (let index = 0; index < numeros.length; index += 1) {
		let valor = numeros[index];
		if (num[valor] === undefined) {
			num[valor] = 1;
		} else {
			num[valor] = num[valor] + 1;
		}
	}

	let contRepetido = 0;
	let contNumero = 0;

	for (let prop in num) {
		if (contRepetido < num[prop]) {
			contRepetido = num[prop];
			contNumero = prop;
		}
	}

	return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

// requisito 06

function somaTodosNumeros(numero) {
	let total = 0;

	for (let index = 1; index <= numero; index += 1) {
		total = total + index;
	}
	return total;
}

console.log(somaTodosNumeros(5)); //15

// requisito 07

function verificaFimPalavra(palavra, fimPalavra) {
	let inversoPalavra = palavra.split("").reverse().join("");
	let inversoFimPalavra = fimPalavra.split("").reverse().join("");
	let result;

	for (let index = 0; index < inversoFimPalavra.length; index += 1) {
		if (inversoPalavra[index] !== inversoFimPalavra[index]) {
			result = false;
			break; // O "break" serve para encerrar o loop.
		} else {
			result = true;
		}
	}
  
	return result;
}

console.log(verificaFimPalavra("trybe", "be")); //true
console.log(verificaFimPalavra("joaofernando", "fernan")); //false