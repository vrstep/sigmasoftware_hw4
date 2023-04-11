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

function calculateDifference(object, refund) {
  let result = 0;
  for (let value of Object.values(object)) {
    result += value;
  }
  return result - refund;
}

console.log(calculateDifference(object2, 400));
