//1

const fizzOrBuzzOrFizzBuzz = 43;

if (fizzOrBuzzOrFizzBuzz % 3 === 0) {
    console.log("Fizz")
} else if (fizzOrBuzzOrFizzBuzz % 5 === 0) {
    console.log("Buzz")
} else if (fizzOrBuzzOrFizzBuzz % 3 == 0 && fizzOrBuzzOrFizzBuzz % 5 == 0) {
    console.log("FizzBuzz")
} else {
    console.log(fizzOrBuzzOrFizzBuzz)
}