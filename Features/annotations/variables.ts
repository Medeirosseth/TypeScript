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
