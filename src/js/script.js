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

// =================================================================//



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


// =================================================================//

// personalData.size = size;

// console.log(personalData)

// let metrics = personalData.address.metrics


// console.log(metrics)


// =================================================================//

// let requiredNumber = 40;

// let enterNumber = prompt("Введіть загадане число");

// if(enterNumber > requiredNumber){
//   console.log("Забагато")
// }else if(enterNumber < requiredNumber){
//   console.log("Замало")
// }else{
//   console.log("Вгадали")
// }


// =====================================================

// let fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "pear",
//   "grape",
//   "pineapple",
//   "strawberry",
//   "watermelon",
//   "kiwi",
//   "mango",
//   "peach",
//   "lemon",
//   "lime",
//   "blueberry",
//   "raspberry",
//   "blackberry",
//   "apricot",
//   "cherry",
//   "coconut",
//   "fig",
//   "pomegranate",
//   "plum",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
// ];

// let counter = 0;
// fruits.forEach(function (item){
//   if(item[0] == "a") {
//     console.log(item);
//     counter++;
//   }
// });


// =============================================================== //
// while (fruits.length > 0) {
//   console.log(fruits.pop())
// }
// =============================================================== //


// const position = fruits.indexOf("kiwi");
// console.log(position)
// if (position >= 0){
//   console.log(`I like a ${fruits[position]}`);
// }else{
//   console.log('Error')
// }


let familyList = [
  {
    name: "John Doe",
    age: 25,
  },
  {
    name: "Jane Doe",
    age: 24,
  },
  {
    name: "Jack Doe",
    age: 18,
  },

  {
    name: "Janifer Doe",
    age: 14,
  },
  {
    name: "Sem Doe",
    age: 24,
  },
];

familyList.forEach((item)=>{
  if(item.age >= 21){
    console.log(item.name + ' ' + 'You adult!')
  }
})


// console.log(familyList[0].name + " " + familyList[0].age)
