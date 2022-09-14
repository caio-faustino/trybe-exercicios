let info = {
	personagem: "Margarida",
	origem: "Pato Donald",
	nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
	recorrente: "Sim",
};

// requisito 01

console.log("Bem-vinda, " + info.personagem);

// requisito 02

info.recorrente = "Sim";
console.log(info);

// requisito 03

for(let properties in info) {
	console.log(properties);
}

// requisito 04
  
for(let properties in info) {
	console.log(info[properties]);
}

// requisito 05

let info2 = {
	personagem: "Tio Patinhas",
	origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
	nota: "O último MacPatinhas",
	recorrente: "Sim",
};

for (let properties in info) {
	if (
		properties === "recorrente" &&
      info[properties] === "Sim" &&
      info2[properties] === "Sim"
	) {
		console.log("Ambos recorrentes");
	} else {
		console.log(info[properties] + " e " + info2[properties]);
	}
}

// requisito 06

let leitor = {
	nome: "Julia",
	sobrenome: "Pessoa",
	idade: 21,
	livrosFavoritos: [
		{
			titulo: "O Pior Dia de Todos",
			autor: "Daniela Kopsch",
			editora: "Tordesilhas",
		},
	],
};

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama \"" + leitor.livrosFavoritos[0].titulo + "\"");

// requisito 07

leitor.livrosFavoritos.push(
	{
		titulo: "Harry Potter e o Prisioneiro de Azkaban",
		autor: "JK Rowling",
		editor: "Rocco",
	}
);

// requisito 08

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");
