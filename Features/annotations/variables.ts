let apples = 5;
let speed = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects 
let now: Date = new Date();



//Array
let colors: string[] = ["green", "red", "yellow"]
let myNums: number[] = [1, 2, 3];
let facts: boolean[] = [true, false, true];

//Classes

class Car {

}

let car: Car = new Car();


//Object Literal

let point: { x: number; y: number } = {
    x: 10,
    y: 20
  }


//Function 

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
};

// false => JSON.parse() returns "any" type

// type inference only works on one line of code 


// When to use annotations 
// 10 Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: {"x": number; "y": number} = JSON.parse(json)


// 2) When we decalre a variable on one line 
// and initalize it later 
let words = ['red', 'green', 'blue'];
let foundWord = false

for (let i = 0; i <words.length; i ++) {
  if(words[i] === 'green'){
    foundWord = true
  }
}


//3) Variables whose type connot be inferred correctly
let numbers = [-10, -1, 12]
let numbersAboveZero: boolean | number = false;

for (let i = 0; i <numbers.length; i++ ) {
  if (numbers[i] > 0) {
    numbersAboveZero = true
  } 
}