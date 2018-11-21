// EXERCISE01

// const students =['Neil', 'Anne', 'Roisin'];
//
// function arrayProcessor_old(element){
//   console.log(element.toUpperCase());
// }
//
// students.forEach((element) => console.log(element.toUpperCase()));

// const books =['ES6 and beyond', 'Thinking in JS', 'JS Patterns', 'JS: The Good Parts'];
//
// books.forEach(book => console.log(`I need to read ${book}`));

// EXERCISE02

// const marks = [40, 45, 50, 65];

// // let allPass = true;
// // for (let i = 0; i < marks.length; i++) {
// //   if (marks[i] < 40) {
// //     allPass = false;
// //     break;
// //   }
// // }

// // const passed = mark => mark >= 40;
// // const allPass = marks.every(passed);

// const allPass = marks.every(mark => mark >= 40);

// console.log(allPass ? 'Everyone passed' : 'Someone falied');

// const nums = [5, 10, 15, 30]; // true
// const nums2 = [6, 10, 15, 30]; // false
//
// const div = nums.every(num => num %5 === 0);
// const div2 = nums2.every(num2 => num2 %5 === 0);
//
// console.log(div ? 'Is divisible by 5' : 'Not divisible by 5');
// console.log(div2 ? 'Is divisible by 5' : 'Not divisible by 5');

// EXERCISE03

// const names = ['Andrew', 'Mortimor', 'Alexandra'];
// const names2 = ['Jo', 'Jill', 'Alex'];
//
// const long = text => text.length > 5;
// const char = names.some(long);
// const char2 = names2.some(long);
//
// console.log(char);
// console.log(char2);

// EXERCISE04

// const prices = [200 , 200, 125, 100];
//
// const vatOfPrices = prices.map(calcVat);
//
// console.log(vatOfPrices);
//
// function calcVat(price) {
//   const vat = .23;
//   return price * vat;
// }

// EXERCISE05

// const posNeg = [1, -1, -2, 3, 5, -7];
//
// const isPos = n => n >= 0;
// const onlyPos = posNeg.filter(isPos);
//
// console.log(onlyPos);


// EXERCISE06

const prices = [10,1,1,1,1];

const totalPrice = 0;

const reducer = prices.reduce ((totalPrice, value) => {
  console.log('total ' + totalPrice);
  console.log('value ' + value);
  return totalPrice + value;
});

console.log('total ' + reducer);
