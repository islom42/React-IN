let numbers = [2, 5, 6, 8, 10];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// console.log(sum);

//==================================
//==================================

//! Destrution

const footballClubs = {
  name: "Real Madrid",
  location: "Madrid",
  categories: ["Spain", "Men", "Women"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
};

const { name, categories, openingHours } = footballClubs;
// console.log(categories);
const {
  name: clubName,
  categories: tags,
  openingHours: workingTime,
} = footballClubs;

// console.log(clubName, tags, workingTime);

//===============
const arr = [2, 3, 4, [20, 20]];
const one = arr[0];
const two = arr[1];
const three = arr[2];
// console.log(one, two, three);
const [a, b, c, [d, e]] = arr;
// console.log(a, b, c, d, e);

//! Spread operator

const arrSpread = [2, 3, 4];
const badExample = [2, 6, arrSpread[0], arrSpread[1], arrSpread[2]];
// console.log(badExample);

const newExample = [5, 15, ...arrSpread];
console.log(...[newExample]);

//===================================
//===================================

//! Function
