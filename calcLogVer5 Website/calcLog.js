// utility functions
function reciprocate(num) {
  return 1 / num;
}
function roundDecimals(num) {
  return Math.round(num * 10000000000) / 10000000000;
}

// main function
const marginTrialsError = 600; // try until 600 trials, then end loop.
const epsilon = 0.00000000000000000001; // try (0.00000000001, 0000000000000001, 00000000000000000001)

function calcLog(base, argument) {
  // unique cases: log 1 (1) has infinite solutions; log 0 (x), x ∉ 0 has 0 solution
  if (base == 0 && argument > 0) return 0;
  if (base == 1 && argument == 1) return NaN;

  // restrictions: base/argument can't be negative or 0;
  if (base < 0 || argument <= 0) return `error: NaN; base cannot be negative and argument cannot be 0 or negative`;

  // bisection search variables
  let lowerRange,
    upperRange = argument;

  // conditions
  if (base % 1) {
    // base is decimal
    const answer = calcLog(10, argument) / calcLog(10, base);
    return answer;
  } else if (base === 1 && argument !== 1) {
    // base is 1 & arg is not 1
    if (argument > 1) return Infinity;
    if (argument < 1 && argument > 0) return -Infinity;
  } else if (argument % 1) {
    // argument is decimal
    lowerRange = reciprocate(argument) * -1;
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
    exponentialFx > argument ? (upperRange = median) : (lowerRange = median);
    median = (upperRange + lowerRange) / 2;
    exponentialFx = base ** median;
    numGuesses++;

    // margin of error
    if (numGuesses > marginTrialsError) {
      let marginOfError = exponentialFx - argument;
      console.log(
        `margin of error: ${marginOfError}; exponentialAnswer: ${exponentialFx}; expected: ${argument}`
      );
      break;
    }
  }

  // answer
  return roundDecimals(median);
}