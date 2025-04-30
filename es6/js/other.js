'use strict';

console.log("executing other.js");

const peopleArray = ['fred', 'steve', 'other'];
console.log(peopleArray);

export function getOtherPeople() {
  return peopleArray;
}

export default function getBMI({height, weight}) { 
  return 703*weight/(height*height);
}