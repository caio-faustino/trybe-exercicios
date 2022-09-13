let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// requisito 01

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// requisito 02

let result = 0

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

console.log(result)

// requisito 03

let arrayLenght = numbers.length

let average = result / arrayLenght

console.log(average)

// requisito 04

if (average > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

// requisito 05

let bigger = numbers[0]

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > bigger) {
        bigger = numbers[index]
    }
}

console.log(bigger)

// requisito 06

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// requisito 07

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);

// requisito 08

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

// requisito 09

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

//   requisito 10

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// requisito 11

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// requisito 12

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
