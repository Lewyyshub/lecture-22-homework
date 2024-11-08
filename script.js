// ex 1 //
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((number) => {
  let square = number * number;
  console.log(square);
});

// ex 2 //

let fruits = ["apple", "orange", "watermalon", "strawberry"];

fruits.forEach((fruitNames) => {
  console.log(fruitNames);
});

// ex 3 //
let calculate = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
calculate.forEach((nums) => {
  sum += nums;
});
console.log(sum);

// ex 4 //

let stundents = ["natia", "luka", "givi", "zakro"];
stundents.forEach((student, index) => {
  console.log(`${index + 1} ადგილი: ${student}`);
});

// ex  5 //

let wholenumbers = [4, 5, 11, 22, 24, 17, 13];

wholenumbers.forEach((numberss) => {
  if (numberss % 2 === 0) {
    console.log(numberss);
  }
});

// ex 6 //

let num = [1, 2, 3, 4, 5];
let squares = num.map((numb) => numb * numb);
console.log(squares);

// ex 7 //

let names = ["LEVANI", "NATIA", "IRAKLI"];
let lowerkeynames = names.map((makelowerkey) =>
  makelowerkey.toLocaleLowerCase()
);
console.log(lowerkeynames);

// ex 8 //

let numbs = [10, 20, 30];

let increasednumbs = numbs.map((number) => number + 10);
console.log(increasednumbs);

// ex 9 //

let studentNamesAndScor = [
  { name: "levani", score: 1000 },
  { name: "natia", score: 999 },
  { name: "venera", score: 1 },
  { name: "marsi", score: 74 },
  { name: "saturni", score: 21 },
];

let onlynames = studentNamesAndScor.map((student) => student.name);
console.log(onlynames);

// ex 10 //

let multiplyednums = [1, 2, 3, 4, 5, 6, 7];

let changednums = multiplyednums.map((number) => {
  if (number % 2 === 0) {
    return number * 2;
  } else {
    return number;
  }
});
console.log(changednums);

// ex 11 //

let numberos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numberos.filter((number) => number % 2 === 0);
console.log(evenNums);

// ex 12 //

let longnames = ["vasiai", "gelai", "iko", "gelboi", "geltmeni"];
let onlylongnames = longnames.filter((longnames) => longnames.length > 5);
console.log(onlylongnames);

// ex 13 //
let positiveornot = [12, -1, -213123123, 523, 243, -84];
let positivenums = positiveornot.filter((number) => number > 0);
console.log(positivenums);

// 14 //
let products = [
  { name: "ვაშლი", price: 120 },
  { name: "ბანანი", price: 85 },
  { name: "ყურძენი", price: 140 },
  { name: "ნარინჯი", price: 22 },
  { name: "კივი", price: 11 },
  { name: "ტარხუნა", price: 999 },
];

let onleprice = products.filter((product) => product.price > 100);
console.log(onleprice);

// ex 15 //

let bignumbers = [10, 20, 30, 40, 50, 60, 70, 80];
let numbersAbove50 = bignumbers.filter((number) => number > 50);
console.log(numbersAbove50);

// ex 16 //

let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}

// ex 17 //
let numbros = [2, 3, 5, 7, 8];
let summ = 0;
let index = 0;

while (index < numbers.length) {
  sum += numbers[index];
  index++;
}
console.log(sum);

// ex 18 //

let nu = 0;

while (nu <= 20) {
  console.log(nu);
  nu += 2;
}

// ex 19 //
let numberr = 40;

while (number >= 10) {
  console.log(number);
  number--;
}

// ex 20 //

let people = [
  { namea: "ანა", age: 25 },
  { namea: "გიორგი", age: 30 },
  { namea: "მარიამი", age: 22 },
  { namea: "დათო", age: 28 },
  { namea: "ლაშა", age: 35 },
];

let indexx = 0;
while (indexx < people.length) {
  console.log(people[indexx].namea);
  indexx++;
}

