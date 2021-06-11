function Person(name, age, height, kg) {
  this.name = name;
  this.age = age || 20;
  this.height = height || 160;
  this.kg = kg || 50;
}

Person.prototype.info = function () {
  console.log(
    `나의 이름은 ${this.name}이고 나이는 ${this.age}이다. 키는 ${this.height}다 덤벼라.`
  );
};

Person.prototype.walk = function () {
  console.log(`${this.name}는 걷고 있다.`);
};

Person.prototype.run = function () {
  console.log(`${this.name}는 ${this.kg}kg의 몸무게를 빼기위해 달리고 있다.`);
};

function Jang(name, age, height, kg, job) {
  Person.apply(this, arguments);
  this.job = job || "무직";
}

Jang.prototype = Object.create(Person.prototype);
Jang.prototype.constructor = Jang;
Jang.prototype.info = function () {
  console.log(
    `나의 이름은 ${this.name}이고 나이는 ${this.age}이다. 키는 ${this.height}다. 직업은 ${this.job}`
  );
};

function Yu(name, age, height, kg, job) {
  Person.apply(this, arguments);
  this.job = job || "무직";
}
Yu.prototype = Object.create(Person.prototype);
Yu.prototype.constructor = Yu;
Yu.prototype.info = function () {
  console.log(
    `나의 이름은 ${this.name}이고 나이는 ${this.age}이다. 키는 ${this.height}다. 직업은 ${this.job}`
  );
};

var shj = new Jang("장성현", 29, 171, 70, "프로그래머");
shj.info();
shj.walk();

var yjw = new Yu("유종원", 29, 165, 90);
yjw.info();
