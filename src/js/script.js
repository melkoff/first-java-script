// const {name} = require("browser-sync");

// let name = 'John';
// let surname = 'Dou';
// let middleName = 'Patrick';

// let arraySome = [2, 13, 6, 13, 12.56]

// const position = arraySome.indexOf("8");
// let someStr = "dadada"

// try {
//   Number(someStr)
// } catch {

// }

// console.log('Array:', position);

// if (position >= 0) {
//   console.log(`Число ${13} є в маисві!`);
// } else {
//   console.log(`Число ${13} не є в маисві!`);
// }

// Array

// let age = [12, 13, 22, 13, 17];
// const personalData = surname + ' ' + name[0] + '.' + ' ' + middleName[0] + '.';

// console.log('Data: ', name)

// push, unshitf    END and START elements
// pop, shift     START and END


// let personalData = {
//   name: "John",
//   surName: "Patrick",
//   lastName: "Doe",
//   address: {
//     city: "Dro",
//     street:  "Ranavytka",
//     number: 123,
//     name: "some",
//     metrics:{
//       water: 231123,
//       has: 324324
//     }
//   },
//   age: [12, 23,45],
//   isChildren: true
// };

// const a = prompt("Введіть число:")
// // a !=1  or  a==1
// if (a > 1 && a < 5){
//   console.log("success")
// } else{
//   console.log('fail')
// }




// const a = prompt("Введіть число:")

// if (a == 0 || a > 5){
//   console.log("success")
// } else{
//   console.log('fail')
// }





// const age = prompt('Введіть ваш вік: ');
// const isActive = false;
// console.log(typeof age);

// let someArr = [];

// let someArr1 = [] == someArr.length;

// console.log(someArr1)

// if(someArr){
//   if (age >= 0){
//     if(age < 18){
//       console.log("Ви не повнолітні!")
//     } else if(age >= 18 && age < 21){
//       console.log("Ви повнолітні в Укрїні!")
//     } else{
//       console.log("Ви повнолітні всюди!")
//     }
//   } else{
//     console.log("Ви ввели не вірні дані!")
//   }
// }else{
//   console.log("Форма не працює!")
// }




// personalData.size = size;

// console.log(personalData)

// let metrics = personalData.address.metrics


// console.log(metrics)




let requiredNumber = 40;

let enterNumber = prompt("Введіть загадане число");

if(enterNumber > requiredNumber){
  console.log("Забагато")
}else if(enterNumber < requiredNumber){
  console.log("Замало")
}else{
  console.log("Вгадали")
}
