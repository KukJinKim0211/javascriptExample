// class 문법을 사용한 상속
class Vehicle {
  constructor() {
    console.log('Initialize');
  }

  run() {
    console.log('run');
  }

  stop() {
    console.log('stop');
  }
}

class Car extends Vehicle {
  constructor(type) {
    super();    // 부모 클래스의 constructor() 메서드에서 반환한 객체를 자식 클래스에서 사용해야 한다.
    this.type = type;
  }
}