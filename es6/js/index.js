'use strict';

import { getOtherPeople } from './other.js';
import getBMI from './other.js';


console.log("executing main.js")

// const foo = (params) => {
//   return 'foo '+params;
// }
// const sayHello = () => onsole.log("Hello world");

// const myArray = [1, 2, 3];
// const [x, y, z, a] = myArray;
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];

// console.log('x', x);
// console.log('y', y);
// console.log('z', z);
// console.log('a', a);

// const myObject = {a: 1, b: 2, c: 3};
// const {b, a, c, d} = myObject; //myObject.a to a, etc.

// console.log(a); //=> 1
// console.log(b); //=> 2;
// console.log(c); //=> 3;
// console.log(d);


//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
//console.log(peopleArray);

const peopleAndFriendsArray = [
  ...peopleArray,
  {name: 'Fred', height: 65, weight: 140}
]

console.log(peopleAndFriendsArray);

const originalArray = ['a', 'b', 'c', 'd'];
const newArray = ['z', ...originalArray, 'e', 'f'];
console.log(newArray);
const arrayCopy = [...originalArray];
console.log(arrayCopy);

const person = {name: 'Ada', height: 64, weight: 135}

const copyOfPerson = {height: 66, ...person}; //clone an object!
console.log(copyOfPerson);

const otherPeople = getOtherPeople();
console.log(otherPeople);

console.log(getBMI(peopleArray[0]));
