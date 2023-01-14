// const {name} = require("browser-sync");

let name = 'John';
let surname = 'Dou';
let middleName = 'Patrick';

let arraySome = [2, 13, 6, 13, 12.56]

const position = arraySome.indexOf("8");
let someStr = "dadada"

try {
  Number(someStr)
} catch {

}

console.log('Array:', position);

if (position >= 0) {
  console.log(`Число ${13} є в маисві!`);
} else {
  console.log(`Число ${13} не є в маисві!`);
}

// Array

// let age = [12, 13, 22, 13, 17];
// const personalData = surname + ' ' + name[0] + '.' + ' ' + middleName[0] + '.';

// console.log('Data: ', name)

// push, unshitf    END and START elements
// pop, shift     START and END