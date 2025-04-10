// Ejercicios Funciones Flecha

// Ejercicio 1

const greetings = () => "Hola";

// Ejercicio 2

const division = (a, b) => a / b;

// Ejercicio 3

const myName = (name) => `Mi nombre es ${name}`;

// Ejercicio 3

const test2 = () => console.log("Función test 2 ejecutada.");

const test1 = (callback) => callback();

// Ejercicio ForEach

let people = [
  { name: "Jamiro", age: 45 },
  { name: "Juan", age: 35 },
  { name: "Paco", age: 34 },
  { name: "Pepe", age: 14 },
  { name: "Pilar", age: 24 },
  { name: "Laura", age: 24 },
  { name: "Jenny", edad: 10 },
];

// Ejercicio 1 y 2

const newPeople = [];
const startedJchar = [];
people.forEach((person) => {
  //ejercicio 1
  if (person.age > 25) {
    newPeople.push(person);
  }
  //ejercicio 2 aprovechando el mismo forEach
  if (person.name[0] === "J") {
    startedJchar.push(person);
  }
});
console.log("mayores de 25", newPeople);
console.log("nombres que comienzan por 'J' ", startedJchar);

// Ejercicio Map

// Ejercicio 1

const mayoresDe25 = [];
const containsJ = [];
//ejercicio 1
people.map((person) => {
  if (person.age > 25) {
    mayoresDe25.push(person);
  }
  //ejercicio 2
  if (person.name[0] === "J") {
    containsJ.push(person);
  }
});

console.log(mayoresDe25);
console.log(containsJ);

// Ejercicio 3
const numbers = [4, 5, 6, 7, 8, 9, 10];
const cuadrados = numbers.map((numero) => numero ** numero);
console.log(cuadrados);

// Ejercicio Filter
const numbersToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Ejercicio 1

const odds = numbersToTen.filter((number) => number % 2 !== 0);
console.log(odds);

const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];
//  Ejercicio 2

const veggieFood = foodList.filter((food) => food.isVeggie);
veggieFood.forEach((food) => console.log(`Que rico ${food.name} me voy a come`));

// Ejercicio Reduce

const numbersReduce = [39, 2, 4, 25, 62];

// Ejercicio 1

const reduce = numbersReduce.reduce((a, b) => a * b);
console.log(reduce);

//  Ejercicio Extra

// Map
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
// Ejercicio 1

const frases = staff.map((user) => `${user.name} es ${user.role} y le gusta ${user.hobbies[0]} y ${user.hobbies[1]}`);
console.log(frases);

// Ejercicio 2

const ciudadPais = foodList2.map((food) => {
  switch (food) {
    case "Pizza":
      return `Como soy de Italia, amo comer ${food}`;
    case "Ramen":
      return `Como soy de Japón, amo comer ${food}`;
    case "Paella":
      return `Como soy de Valencia, amo comer ${food}`;
    case "Entrecot":
      return `Aunque no como carne, el ${food} es sabroso`;
  }
});
console.log(ciudadPais);

// Ejercicio Filter
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];
//Ejercicio 1

const elementFiltered = inventory.filter((element) => element.price > 300).map((element) => element.name);
console.log(elementFiltered);

// Ejercicio Reduce

//Ejercicio 1
const sentenceElements = ["Me", "llamo", /* Tu nombre aquí! */ "David", "y", "quiero", "sentir", "la", "fuerza", "con", "javascript"];

const newCdena = sentenceElements.reduce((a, b) => a + " " + b, "");
console.log(newCdena.trim());
