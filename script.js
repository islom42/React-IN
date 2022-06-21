const fName = "Islom";
const job = "Front-end developer";
const birthYear = 2001;
const currentYear = new Date().getFullYear();

const me = "I am " + fName + " a " + job + " I was born in  " + birthYear;

const newMe = `I am ${fName} a ${job} and my age is ${currentYear - birthYear}`;
// console.log(me);
// console.log(newMe);

//==========================================
//==========================================
//! if else

const myAge = 17;
const yearsLeft = 18 - myAge;

// if (myAge > 18) {
//   console.log("I can drive");
// } else {
//   console.log(`I can not drive a car I need wait ${yearsLeft} year`);
// }

//==========================================
//==========================================

//! Ternary operator
// myAge > 18
//   ? console.log("I can drive")
//   : console.log(`I can not drive a car I need wait ${yearsLeft} year`);

const isAccess = myAge >= 18 ? "I can drive" : "No Access";
// console.log(isAccess);

//==========================================
//==========================================

//! switch case
// const day = "monday";
// switch (day) {
//   case "monday":
//     console.log("Plan of the course");
//     break;
//   case "tuesday":
//     console.log("Record video");
//     break;
//   default:
//     console.log("Not available");
//     break;
// }
//==========================================
//==========================================

//! Data transforming
// map and filter

let movements = [2, 3, 5, 7, 9, -5, -5];
let euroToUst = 1.5;

// const transformToUsd = movements.map((item) => item * euroToUst);
const transformToUzs = movements.map((item, index) => {
  return `siz ${index + 1} urinshida ${item * euroToUst}`;
});
// console.log(transformToUsd);
console.log(transformToUzs);

//[===============]
const positiveNum = movements.filter((item) => {
  return item > 0;
});
console.log(positiveNum);
