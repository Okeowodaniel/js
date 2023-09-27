// 'use strict';
// function calAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     // BLOCK SCOPING
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // var mill = true;

//       // Creating New variable with same name as outer scope's variable

//       // REASSIGNING OUTER SCOPE'S VARIABLE

//       const firstName = 'Daniel';
//       const str = `Oh, and you're a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       const output = 'NEW OUTPUT';
//     }

//     // console.log(mill);
//     console.log(str);
//     // console.log(add(2, 3));
//   }
//   printAge();

//   return age;
// }

// // GLOBAL SCOPe
// const firstName = 'DLite';
// calAge(1991);

// HOISTING IN PPRATICE

// Varible Hoisting
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Dliite';
// let job = 'teacher';
// const year = 1991;

// Funtion Hoisting
// console.log(addDel(2, 5));
// // console.log(addExp(2, 5));
// console.log(addArrow(2, 5));

// function addDel(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// /Example
// console.log(undefined);
// if (!numProducts) delectShoppingCart();

// var numProducts = 10;

// function delectShoppingCart() {
//   console.log();
//   ('All Products delected');
// }

// var x = 1;
// let y = 2;
// const z = 3;
