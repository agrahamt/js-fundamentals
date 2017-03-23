// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 0
// Write a function that calculates the sum of all the numbers in an array.

// TODO: Your function goes here.
function sumOfArray(numArray) {
  var sum = 0
  for (var i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i]
  }
  return sum
}
console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 1
// Write a function maxOfArray() that takes an array of numbers as an argument
// and returns the highest number.
// Return null if an array of numbers is not passed.

// TODO: Your function goes here.
function maxOfArray (numArray) {
  var max = 0
  for (var i = 0; i < numArray.length; i++) {
    if (typeof numArray[i] !== 'number') {
      return null
    } else if (max < numArray[i]) {
      max = numArray[i]
    }
  }
  return max
}

console.assert(maxOfArray([2, 4, 3]) === 4)
console.assert(maxOfArray([10, 9, 8, 100, 7, 6]) === 100)
console.assert(maxOfArray([1, 2, 'bucklemyshoe']) === null)
console.assert(maxOfArray('12345') === null)
console.assert(maxOfArray(87) === null)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 2
// Write a function isVowel() that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

// TODO: Your function goes here.

console.assert(isVowel(0) === false)
console.assert(isVowel('B') === false)
console.assert(isVowel('b') === false)
console.assert(isVowel('a') === true)
console.assert(isVowel('E') === true)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Part 3
// Define a function reverse() that computes the reversal of a string.
// For example, reverse('skoob') should return the string 'books'.

// TODO: Your function goes here.

console.assert(reverse('z') === 'z')
console.assert(reverse('books') === 'skoob')
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Part 4
// Write a function the returns a FizzBuzz string for some number N (counting up from 1).
// - for every number that isn't a multiple of 3 or 5, return a period '.'
// - for every number that is a multiple of 3 (but not 5), return 'fizz'
// - for every number that is a multiple of 5 (but not 3), return 'buzz'
// - for every number that is a multiple of 3 and 5, return 'fizzbuzz'

// TODO: Your function goes here.

console.assert(fizzbuzz(1) === '.')
console.assert(fizzbuzz(2) === '..')
console.assert(fizzbuzz(3) === '..fizz')
console.assert(fizzbuzz(5) === '..fizz.buzz')
console.assert(fizzbuzz(10) === '..fizz.buzzfizz..fizzbuzz')
console.assert(fizzbuzz(27) === '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz..fizz.buzzfizz..fizzbuzz.fizz')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Part 5
// Write a function findLongestWord() that takes a string of words and returns the longest word.
// If there are multiple words with the same max length, the first word should be returned.

// TODO: Your function goes here.

console.assert(findLongestWord('a b c') === 'a')
console.assert(findLongestWord('a book full of dogs') === 'book')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 6
// Write a function that returns the Greatest Common Denominator (GCD) of two numbers.
// If no GCD exists, return 1

// TODO: Your function goes here.

console.assert(gcd(5, 1) === 1)
console.assert(gcd(15, 3) === 3)
console.assert(gcd(15, 5) === 5)
console.assert(gcd(50, 20) === 10)
