// ------------------------------------- BEFORE REFACTOR 

// interface Vehicle {
//   name: string,
//   year: Date,
//   broken: boolean,
// }


// const oldCivic = { 
//   name: 'Civic',
//   year: new Date(),
//   broken: true
// };

// const printVehicle = (vehicle: Vehicle): void => {
// console.log(`Name: ${vehicle.name}`)
// console.log(`Year: ${vehicle.year}`)
// console.log(`Broken?: ${vehicle.broken}`)
// }

// printVehicle(oldCivic)


// ------------------------------------------------------------------- REFACTOR 1 ----------
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }


// const oldCivic = { 
//   name: 'Civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   }
// };

// const printVehicle = (vehicle: Vehicle): void => {
// console.log(vehicle.summary)
// }

// printVehicle(oldCivic)

//------------------------------------------------------------------- Refactor 2

interface Reportable {
  summary(): string;
}


const oldCivic = { 
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name} Year: ${this.year} Broken?: ${this.broken}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

const printSummary = (item: Reportable): void => {
console.log(item.summary)
}

printSummary(oldCivic)
printSummary(drink)