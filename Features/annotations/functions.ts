const add = (a: number, b: number): number => {
return ( a + b )
}

const subtract = (a: number, b: number): number => {
  return a - b 
} 

// add a return annotation to show that a function acutally has a return statement 


function divide(a: number, b: number ): number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b; 
}


// for a string function that returns nothing / null => void
const logger = (message: string ): void => {
  console.log(message)
}


///very rare use
const throwError = (message: string): never  => {
  throw new Error(message)
}

const throwAError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
}


const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather)
}


logWeather(todaysWeather)