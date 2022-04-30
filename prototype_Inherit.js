// 프로토 타입을 사용한 상속 구현

function Vehicle() {
  console.log('initialize Vehicle');
}

Vehicle.prototype.run = function () {
  console.log('run!');
}

Vehicle.prototype.stop = function () {
  console.log('stop!');
}

// Car 생성자 함수
function Car(type) {
  this.type = type;
}

function inherit(parent, child) {
  function F() { };
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
}

inherit(Vehicle, Car);
const vehicle = new Vehicle();
vehicle.run();
const car = new Car('SUV');
car.run();
console.log(new Car('SUV'));