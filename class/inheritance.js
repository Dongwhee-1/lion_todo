// 부모 클래스 정의하기
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
}

// 자식 클래스 정의하기
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name}이(가) 멍멍 짖습니다.`);
  }

  fetch() {
    console.log(`${this.name}이(가) 공을 가져옵니다.`);
  }
}

// 객체 생성하기
const dog = new Dog("뽀삐");
dog.speak(); // 뽀삐이(가) 멍멍..
dog.fetch(); // 뽀삐이(가) 공을..
