// //high order function// closer / callback
// function highOrder() {
//     let names= "jon";
//     return function inner() {
//         console.log(names);
//     }  
//     inner();
// }
// var high =  highOrder();
// high()

// //this key word
// var obj1 = {
//     names: "malik",
//     getName: function (){
//         console.log(this.names);
//     }    
// }
// obj1.getName()

// //Hoisting
// x=10;
// console.log(x);
// var x;


// //implict type casting
// let a=5;
// let b="5";
// let c = a-b;
// console.log(c);


//IIFE

// (function name(params) {
//     console.log(params);
// })(10)

//call, apply, bind , function borrowing

// let name1 = {
//     firstName: "jon",
//     lastName: "ren",
// }
// let printFullName = function(Class, City) {
//     console.log(this.firstName + " " + this.lastName +" study in " + Class+ " " +City);
// } 
// printFullName.call(name1, "BCA", "Meerut");

// let name2 = {
//     firstName: "mon",
//     lastName: "don",
// }

// //faction borrowing "we can use the function outside the object"

// //if we have one or more then two argument in function so we make the array list of argument and apply method

//  let printName =  printFullName.bind(name2, "MCA", "Noida");

// printName()


//...spared or  ...rest

// let arr = [2,4,5,6,3,2];
// let arr1 = [...arr, 3,7,9,2 ]
// console.log(arr);
// console.log(arr1);

// function names(first,...name) {
//     console.log(first,name);
// }
// names("ok","theek", "humm")

//promise

//It is a javascript object for to producing code and consuming code,

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2)
//     {
//         resolve('success');

//     }
//     else {
//         reject('not done');
//     }    
// })

// p.then((massage) => {
//     console.log('this result is ' + massage);
// }).catch((error) => {
//     console.error('Error : ' + error);
// })


