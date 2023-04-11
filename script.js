// Task 2

function stringEnd(string1, string2) {
  return string1.endsWith(string2);
}

// console.log(stringEnd("abc", "bc"));
// console.log(stringEnd("abc", "d"));

// Task 4

function countVowels(string) {
  const regex = /[aeiouAEIOU]/gi;
  return string.match(regex).length;
}

// console.log(countVowels("Ahooooj"));
// console.log(countVowels("Good Morning!"));

// Task 5

let colors = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF",
};

function swapKeyValue(object) {
  const copyObj = {};

  Object.entries(object).forEach(([key, value]) => {
    copyObj[value] = key;
  });
  return copyObj;
}

// console.log(swapKeyValue(colors));

// Task 6

let object = {
  "baseball bat": 20,
};

let object1 = {
  skate: 10,
  painting: 20,
};

let object2 = {
  skate: 200,
  painting: 200,
  shoes: 1,
};

let object3 = {
  shoes: 1,
  skate: 200,
  painting: 200,
};

function calculateDifference(object, refund) {
  let result = 0;
  for (let value of Object.values(object)) {
    result += value;
  }
  return result - refund;
}

// console.log(calculateDifference(object2, 400));

// Task 7

function compareObjects(object1, object2) {
  const entries1 = Object.entries(object1);
  const entries2 = Object.entries(object2);

  // compare length
  if (entries1.length !== entries2.length) {
    return false;
  }

  for (let i = 0; i < entries1.length; i++) {
    // compare keys
    if (entries1[i][0] !== entries2[i][0]) {
      return false;
    }
    // compare values
    if (entries1[i][1] !== entries2[i][1]) {
      return true;
    }
  }
  return true;
}

// console.log(compareObjects(object3, object2));

// Task 8

class Tiles {
  constructor(brand, size_h, size_w, price) {
    this.brand = brand;
    this.size_h = size_h;
    this.size_w = size_w;
    this.price = price;
  }

  getData() {
    console.log(
      `The tile's brand is ${this.brand}, with sizes ${this.size_w}x${this.size_h} and the price ${this.price}`
    );
  }
}

const tile1 = new Tiles("Ikea", 20, 27, "$40");
const tile2 = new Tiles("Marjan", 23, 30, "$23");
// tile1.getData();
// tile2.getData();

// Task 9

class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = [];
  }

  sayHello() {
    console.log(`Привет меня зовут ${this.name}, мне ${this.age} лет`);
  }

  addHobbies(hobby) {
    this.hobbies.push(hobby);
  }

  showHobbies() {
    console.log(this.hobbies);
  }
}

class Child extends Person {
  askChocolate() {
    console.log("Buy me chocolate, bwaaah");
  }

  cry() {
    console.log("child crying...");
  }
}

const person1 = new Person("Hector", 29);
// person1.sayHello();
// person1.addHobbies("cooking");
// person1.addHobbies("playing computer games");
// person1.showHobbies();

const child1 = new Child("Andrew", 5);
// child1.sayHello();
// child1.addHobbies("being annoying");
// child1.cry();
// child1.askChocolate();
// child1.showHobbies();

// Task 10

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    console.log(`This shape's color is ${this.color}`);
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    let area = this.width * this.height;
    console.log(area);
  }

  getPerimeter() {
    let perimeter = (this.width + this.height) * 2;
    console.log(perimeter);
  }
}

class Square extends Rectangle {
  constructor(color, width, height, sideLength) {
    super(color, width, height);
    this.sideLength = sideLength;
  }

  showSideLength() {
    console.log(this.sideLength);
  }
}

const rectangle1 = new Rectangle("yellow", 20, 7);
rectangle1.getArea();
rectangle1.getPerimeter();
rectangle1.getColor();

const square1 = new Square("black", 50, 50);
square1.getArea();
square1.getPerimeter();
square1.getColor();
