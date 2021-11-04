const carMakers = ['ford', 'toyota', 'chevy']  //type inference automatically infers type carMakers = string\
const carMaker: string[] = [] //if creating an empty array make sure to add type annotation

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['F150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values 
carMakers.push('12');

// help with map 
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible Types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10 ')
importantDates.push(new Date())

