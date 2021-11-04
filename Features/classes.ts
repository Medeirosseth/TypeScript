///modifiers 
// Public -> this Method can be called anywhere, anytime 
// Private -> this method can only  be called by other methods in this class
// Protected-> this method can be called by other methods in THIS class, or by other methods in child classes

class Vehicle {

  constructor(public color: string) {}


  protected honk(): void {
    console.log('beep beep')
  }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color)

class Car extends Vehicle{

  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log('VROOM!')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();

