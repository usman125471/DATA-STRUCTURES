'use strict';



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  //////////////////////////////////////////

// const getcode = function(str){str.slice(0, 3).toUppercase()};

for (const flight of flights.split('+')) {
  
  const [type, name, to, time] = flight.split(';');
  const output = `${type.replaceAll('_',' ')} from ${name.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} ${time.replaceAll(':','h')}`.padStart(36);
  console.log(output);
  }

/*
// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  
  orderpasta(ing1, ing2, ing3) {
    console.log(`hey! here is your pasta with  ${ing1},${ing2},${ing3}`);
  }
};

const quiz = new Map([
  ['question', 'what is the best programing language?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct Answer: C)   --JAVASCRIPT--'],
  [false, 'Wrong Answer...Try Again.']
]);

const me=' Myself, Usman '
console.log(me.padStart(20,'*').padEnd(25,'*'));

const maskCredit = function (number) {
  const str = number+'';
  const last =str.slice(-3);
  return last.padStart(str.length,'*');
}
console.log(maskCredit(129293893));
console.log(maskCredit(+923080830291));

const message = 'Bad Weather!   All Arrivals Are Delayed...  '.repeat(5);
console.log(message);

const count = function (n) {
console.log(`There are ${n} planes in line...${'✈'.repeat(n)}`);  

}
count(5);
count(4);
count(7);
count(1);


const [mr, fName, lName] = 'Mr.+ Muhammad+Usman'.split('+');
const newName = [mr,fName,lName,'maani','bhai.'.toUpperCase(),].join(' ')
console.log(newName); 


// // console.log(quiz.get());
// const ans= Number(prompt('Choose the option \n A) 1\n B) 2\n C) 3'));
// // console.log(ans);


// for (const [key, value] of quiz) {
//   if (key === 'correct') {
//   (`Answer ${key}: ${value}`);
//   }
// }

// console.log((quiz.get(quiz.get('correct') === ans)));


// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// const prop = Object.keys(openingHours);
// // console.log(prop);

// let open = `Restaurant is opened in ${prop.length} days: on ${prop} in a week.`;

// const values = Object.values(openingHours);
// // console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key,{open,close}] of entries) {
//   console.log(`On ${key}, our restaurant is opened at ${open} and closed at ${close} `);
// }


// for (const openedDays of prop) {

//   open
// }
// console.log(open);

/*
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const openDay of days) {
  // const opened = restaurant.openingHours[openDay]?.open || 'close';
  // console.log(openDay);
  const opened = restaurant.openingHours[openDay]?.open?? 'close';
  
  console.log(`on ${openDay}, restaurant is open in ${opened}`);
}

console.log(restaurant.orderpasta?.(2,1,1)??"Method does't exsist");



const menue = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menue);
for (const items of menue) console.log(items);

for (const [it,el] of menue.entries()) {
  console.log(`=> item no: ${it+1} # _( ${el} )_`)
};


//////////////////////////////////////
// const myNewRestaurant = { foundedin: 2000, ...restaurant, founder: 'usman' };
// console.log(myNewRestaurant);


///////////////////////////////////////////////////////

// const ingredients = [prompt("let's make pasta! \ningredient:1"), prompt("ingredient:2"), prompt("ingredient:3")];
// console.log(ingredients);

// restaurant.orderpasta(...ingredients);


const {
  //namind the destructed DATA from OBJECT(like resturentname,items and hoursopen). 
  name: restaurentName = [],
  categories: items=[],
  openingHours: hoursOpen=[]//setting them to DEFAULT
} = restaurant;

console.log(restaurentName,items,hoursOpen);

//nested objects
const { fri:{open:openAt,close:closeAt} } = restaurant.openingHours;
console.log(`opening time: ${openAt} 
closing time: ${closeAt}`);

////////////////////////////////////////////////////
//Spread operator
const arr1 = [1, 2, 3, [4, 5,6, [7, 8]], [9, 0]];
console.log(arr1);
const arr2 = [...arr1,...arr1[3],...arr1[4]];
console.log(arr2);

const newMenue = [...restaurant.mainMenu,'gnocci'];
console.log(newMenue);


const menue = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menue);

const myName = 'usman.';
const nameLetters = [...myName,...'Bilal'];
console.log(nameLetters);
///////////////////////////////////////////////////
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex,mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
}

///////////////////////////////////////////////////////
// const arr = [5, 4, 7, 1];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// console.log(arr[0],arr[1],arr[2],arr[3]);

const [x, y, z] = restaurant.categories;
console.log(x, y, z);

const [first, , second] = restaurant.starterMenu;
console.log(first,second);

const [secondary, first1] = [second,first];
console.log(secondary, first1);
const [order1, order2] = restaurant.order(2, 1);
const ord = new Array(order1, order2);
console.log(ord);
const [orderBy] = ord;
console.log(orderBy);
*/