'use strict';

// console.log("hello world");
// console.log("why is my computer so slow??");

// const message = "Hello variable";
// // message = "something else";
// console.log(message);

// let hoursSlept
// console.log(hoursSlept);

// const msgStr = "I'm a string";
// console.log(40 + '4');

// const num = 10
// const str = '10'

// const areSame = (0 == '')
// console.log("are the same", areSame);


// const lettersArray = ['a', 'b', 'c'];

// lettersArray[5] = 'F';

// console.log(lettersArray);

// console.log(lettersArray.length);

// const agesObj = {
//   sarah:42, 
//   amit:35, 
//   zhang:13
// }
// console.log(agesObj);

// const numWords = {1:'one', 2:'two', 3:'three'}
// console.log(numWords);
// const keyArray = Object.keys(numWords);
// console.log(keyArray);

// agesObj['fred'] = 19;
// console.log(agesObj);

// const dailySleepObj = {day: 'Sunday', hoursSlept: 8};
// const howMuchSleep = dailySleepObj['hoursSlept'];
// console.log(howMuchSleep);

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

console.log(peopleArray);

// for(let i=0; i<peopleArray.length; i++) {
//   const peopleObj = peopleArray[i];
//   console.log(peopleObj);
// }

//for(String myString : myArray){}
for(const peopleObj of peopleArray){
  console.log(peopleObj.name);
}

function greet(greeting, name){
  return greeting  + ", " + name;
}

const result = greet("Hello", "class");
console.log(result);