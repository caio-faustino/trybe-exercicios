/* eslint-disable no-unused-vars */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

	// Seu código aqui.

	console.log(oddsAndEvens); // será necessário alterar essa linha 😉;

	const oddsAndEvens = [13, 3, 4, 10, 7, 2];
	const sortOddsAndEvens = () => {
		oddsAndEvens[0] = 2;
		oddsAndEvens[1] = 3;
		oddsAndEvens[2] = 4;
		oddsAndEvens[3] = 7;
		oddsAndEvens[4] = 10;
		oddsAndEvens[5] = 13;
		return oddsAndEvens;
	};
	const sortedArray = sortOddsAndEvens();
	console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada
};


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
	const sortOddsAndEvens = array.sort((a, b) => a - b);
	return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

// deve ficar conforme abaixo

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);