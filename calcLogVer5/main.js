/* 
    Note: y = logb x => x = b**y
    the argument(x) can't be negative or 0, because the base is positive. A positive number raise to any real number can't become negative and it also can't become 0.

    The base(b) can't be negative or 0, because a negative number raised by any real number won't always have the correct answer and 0 raised by any real number except 0, is still 0.
    ex: 
        y = log-2 (4) => 4 = -2**y; y = 2 (has an answer)
        y = log-10 (10) => 10 = -10**y; (has no answer)
        y = log0 (10) => 10 = 0**y; (answer is always 0 except for y = 0)
    
    https://www.quora.com/Why-is-log-not-defined-for-negative-values
*/

utils = require("./utils.js");

// main function
const marginTrialsError = 600; // try until 600 trials; Get margin of error + break loop
const epsilon = 0.00000000000000000001; // try (0.00000000001, 0000000000000001, 00000000000000000001)

function log(base, argument) {
  // unique cases: log 1 (1) has infinite solutions; log 0 (x), x ∉ 0 has 0 solution
  if (base == 0 && argument > 0) return 0;
  if (base == 1 && argument == 1) return NaN;

  // restrictions: base/argument can't be negative or 0;
  // if (base < 0 || argument <= 0) return `error: NaN; base cannot be negative and argument cannot be 0 or negative`;
  if (base < 0 || argument <= 0) return NaN;

  // bisection search variables
  let lowerRange,
    upperRange = argument;

  // conditions
  if (base % 1) {
    // base is decimal
    const answer = log(10, argument) / log(10, base);
    return answer;
  } else if (base === 1 && argument !== 1) {
    // base is 1 and arg is not 1
    if (argument > 1) return Infinity;
    if (argument < 1 && argument > 0) return -Infinity;
  } else if (argument % 1) {
    // argument is decimal
    lowerRange = utils.reciprocate(argument) * -1;
  } else if (!(argument % 1)) {
    // argument is whole number
    lowerRange = -1;
  }

  // logarithmic function to exponential function
  let median = (upperRange + lowerRange) / 2;
  let exponentialFx = base ** median;
  let numGuesses = 0;

  // bisection search magic
  while (Math.abs(exponentialFx - argument) > epsilon) {
    // console.log(Math.abs(exponentialFx - argument), epsilon)
    // console.log(`(${numGuesses}) log ${base} (${argument}): ${lowerRange} | ${median} | ${upperRange}`)

    exponentialFx > argument ? (upperRange = median) : (lowerRange = median);
    median = (upperRange + lowerRange) / 2;
    exponentialFx = base ** median;
    numGuesses++;

    // margin of error
    if (numGuesses > marginTrialsError) {
      let marginOfError = exponentialFx - argument;
      console.log(
        `margin of error: ${marginOfError}; expFxAns: ${exponentialFx}; expectedAns: ${argument}`
      );
      break;
    }
  }

  // answer
  // return utils.roundDecimals(median);
  return median;
}

module.exports = {
  log,
  epsilon,
};
