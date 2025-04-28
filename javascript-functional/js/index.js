'use strict';

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);


// const message = "hello";

// const number = 4;

// const myFunction = function(person) {
//   console.log("Hello, "+person);
// }

// myFunction("class");

function sayHello(name) { 
  console.log("Hello" + name);
}

//sayHello("hello", "world", "three");

// const sayGoodbye = function(name) {
//   console.log("See you later, "+name);
// }

// function callWithWorld(aFunction) {
//   aFunction("world");
// }

//callWithWorld(sayHello());
// callWithWorld(function(name) {
//   console.log("See you later, "+name);
// });

// function getHello() {
//   return "Hello";
// }

// // console.log( getHello );
// console.log( getHello() );

// function doTogether(firstCallback, secondCallback){
//   firstCallback();  //execute the first function
//   secondCallback();  //execute the second function
//   console.log('at the "same time"!');
// }

// function patHead() {
//   console.log('pat your head');
// }

// function rubBelly() {
//   console.log('rub your belly');
// }

// doTogether(patHead, rubBelly());

// const printName = function(personObj){
//   console.log(personObj.name);
// }

// peopleArray.forEach(function(personObj){
//   console.log(personObj.name);
// });

// for(const personObj of peopleArray){
//   printName(personObj);
// }

//TEMPLATE
// const newArray = oldArray.map(function(elem) {
//   const transformed = ...
//   return transformed;
// });

//[{},{},{}] => ["","",""]
const nameArray = peopleArray.map(function(personObj){
  const transformed = personObj.name;
  return transformed;
});

console.log(nameArray);

const peopleGreetings = nameArray.map(function(nameStr){
  const transformed = "<li>"+ nameStr+"</li>";
  return transformed;
})

console.log(peopleGreetings);
for(const greeting of peopleGreetings){
  console.log(greeting);
}

const totalHeight = peopleArray.reduce(function(accumulation, personObj){
  const newTotal = accumulation + personObj.height;
  return newTotal;
}, 0);
console.log(totalHeight);