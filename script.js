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

console.log(countVowels("Ahooooj"));
console.log(countVowels("Good Morning!"));
