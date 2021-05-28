
/**
 * 
 * Javascript syntax examples for a lot of things.
 * 
 */

// Primitive types
let number = 7;
let string = "plupp";
let array = ["tuta", "och", "kör"];
let bool = true;

// A constant cannot be reassigned
const constant = 'apa';
// ERROR: constant = "something else"

// Named function, normal way to declare a function
function add(a, b) {
   return a + b;
}

// "Arrow function" stored as a variable, also used often
const subtract = (a, b) => a - b;

// Anonymous function, (almost(?)) identical to arrow function above
const multiply = function(a, b) {
   return a * b;
}

// Call functions
add("a", "b");
subtract(7, 7);
multiply(2, 1);

// An object, with properties that consist of keys and values
let object = {
   plupp: "plupp",
   apa: 7,
   snor: [
      { property: "another object inside the array" }
   ]
}

// Access a property
let plupp = object.plupp;
plupp = object["plupp"]; // Also works
let property = object.snor[0].property;

// Destructuring: drip-y syntax for extracting values/properties from objects or arrays.

// Object destructuring, can rename properties
let { apa, snor: snorkråka } = object;

// Array destructuring, can give any variablename to destructured elements, but is dependent on order
let [ plopp ] = snorkråka;
let [/* you can skip entries */, b, c] = array;
console.log(b + c);

if (snorkråka.length == 2 && plopp != 2 || object != undefined) {
   // plupp
}
else {
   // plopp
}

const klump = "klump1";

switch (klump) {
   default:
   case "klump1": {
      console.log("klump1");
      break; // don't forget the break ahahahahahahaha
   }
}

// Ternary operator
const result = plupp == "snor" ? "ja" : "nej";
console.log({plupp, result});

// "For i" loop
for (let i = 0; i < 3; i++) {
   console.log(`PLUPP ${i * 2}`); // "template literal" med dessa ``
}

// "For of"  loop over an array
for (const x of array) {
   console.log(x);
}

// "For each" loop
array.forEach(element => {
   console.log(element);
});

array.forEach(console.log);

array.forEach((x, i) => console.log({x, i}));

// Javascript has many very cool functional-style functions for arrays, like map, filter, reduce, these are very cool
const veryCool = array
   .map(s => s + "😎😎")
   .filter((_, i) => i !== 1)
   .reduce((acc, s) => acc + s, "");

// Using classes. Is essentially syntactic sugar for making objects
class PluppSnor {
   snor = "snor"

   constructor(plopp) {
      this.plopp = plopp;
   }

   getPlopp() {
      return this.plopp;
   }

   printSnor() {
      console.log(this.snor);
   }
}

const pluppSnor = new PluppSnor("plopppppp");
console.log(pluppSnor.getPlopp());

// some things return a promise, which encapsulates an asynchronous result
fetch("https://thiscatdoesnotexist.com/").then((result) => {
   // "then" method takes a callback function which is invoked with the result, asynchrousonyl
   console.log(result);
})

function useResult(result) {
   // haha jk not use
}

// can also pass function as arguments
fetch("https://thiscatdoesnotexist.com/").then(useResult);

// callbacks are not cool and therefore we use promises with something known as "async await"
// async and await are really cool and important

// you can "await" anything that returns a promise which handles it all synchrousously which is cool
// one can only await inside async functions
async function asyncFunctionThatDoesTheSameThingAsTheAbove() {
   const result = await fetch("https://thiscatdoesnotexist.com/");
   console.log(result);
}

// you can make your own promises
async function sleep(time) {
   return new Promise((resolve, reject) => {
      // call resolve with optional data, to return from the promise
      // resolve is basically like calling the method that is passed into "then"
      setTimeout(() => {
         resolve();
      }, time);
   })
}

await sleep(100);
console.log(" i sleep")