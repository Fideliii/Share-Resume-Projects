/* 
    Note: y = logb x => x = b**y
    the argument(x) can't be negative or 0, because the base is positive. A positive number raise to any real number can't become negative and it also can't become 0.

    The base(b) can't be negative or 0, because a negative number raised by any real number won't always have the correct answer and 0 raised by any real number except 0, is still 0.
    ex: 
        y = log-2 (4) => 4 = -2**y; y = 2 (has an answer)
        y = log-10 (10) => 10 = -10**y; (has no answer)
        y = log0 (10) => 10 = 0**y; (answer is always 0 except for y = 0)
    
    Quora community helped me understand this reason.
    https://www.quora.com/Why-is-log-not-defined-for-negative-values
*/

// utility functions
function reciprocate(num) {
  return 1 / num;
}
function roundDecimals(num) {
  return Math.round(num * 100000) / 100000; // try(10000, 100000, 10000000000)
}

// main function
const marginTrialsError = 600; // try until 600 trials; Get margin of error + break loop
const testEpsilon = 0.000001; // match roundDecimals function
const epsilon = 0.0000000001; // try (0.000000001, 0.0000000001)
/*
  if code having problems; play around with the epsilon value.
  Some tests have extremely large/small numbers. 
  Larger epsilon won't consider small number scenarios as "close enough"; conversely with smaller epsilons?
*/

function calcLog(base, argument) {
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
    const answer = calcLog(10, argument) / calcLog(10, base);
    return answer;
  } else if (base === 1 && argument !== 1) {
    // base is 1 and arg is not 1
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
    // debugging
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
  return median;
}

// testing and console logging
function organizeData(sample) {
  return sample
    .trim()
    .split("\n")
    .map((str) => str.trim().split(" "))
    .map((arr) => {
      let intArr = [];
      for (let num of arr) intArr.push(parseFloat(num));
      return intArr;
    });
}
function test(sample) {
  const intSample = organizeData(sample);

  for (let arr of intSample) {
    let ans = roundDecimals(calcLog(arr[0], arr[1]));
    let expectedAns = roundDecimals(arr[2]);
    let consoleMessage = `${intSample.indexOf(arr) + 1}/${
      intSample.length
    } log ${arr[0]} (${arr[1]}) = ${ans} | `;

    Math.abs(ans - expectedAns) <= testEpsilon || ans == expectedAns
      ? (consoleMessage += true)
      : (consoleMessage += `${false}, y = ${expectedAns}`);
    console.log(consoleMessage);
  }
  return;
}
function errorTest(sample) {
  const intSample = organizeData(sample);

  for (let arr of intSample) {
    let ans = roundDecimals(calcLog(arr[0], arr[1]));
    let expectedAns = roundDecimals(arr[2]);
    let consoleMessage = `${intSample.indexOf(arr) + 1}/${
      intSample.length
    } log ${arr[0]} (${arr[1]}) = ${ans} | true ∈ NaN`;

      console.log(consoleMessage);
  }
  return;
}
function log(base, arg) {
  let ans = calcLog(base, arg);
  console.log(`log ${base} (${arg}) = ${ans}`);
}

// base, argument, answer (do not accept fractions)
const sampleEsy = ` 1.004 2 173.6331381421
2 4 2
2 1.0045 0.0064775641
2 2 1
1.0035 1.2903 72.9487201591
4 64 3
10 1000000 6
7 343 3
12 1 0
9 3 0.5
5 15625 6
5 200 3.2920296742
3 345 5.3190233509
2 1234 10.2691266791
9 729 3
2 1024 10
5 25 2
`; // size: 17

const sampleAdv = ` 2 0.015625 -6
27 9 0.6666666667
5 0.04 -2
3 0.02222222222222222222222222222222 -3.4649735207
64 0.25 -0.3333333333
8 0.03125 -1.6666666667
0.5 32 -5
10 1 0
1.002 23 1569.3143330121
1 0.2 -Infinity
0.01 0.05 0.6505149978
0.00775193798449612403100775193798 0.02127659574468085106382978723404 0.7922420212
1 2 Infinity
1256794 1588432 1.0166748852
0.0000518 0.154 0.1895804468
0.0000513 5 -0.1629345285
813187 0.5543 -0.0433581836
0 1 0 
0 0.22 0
0 12 0
1 0.99 -Infinity
1 863 Infinity
5115380 0.00005364 -0.636546274
0.000510 5513 -1.1363607404
0.0058164808418549 0.04588168188381853 0.5987280912
189941311857191195 158591374422491185 0.9954660805
`; // sample size: 26

const sampleErr = `-15654 -16875 NaN
-4155 1523 NaN
0.85153 -11051 NaN
0.183 -0.4681 NaN
0 0 NaN
1 1 NaN
1 -1 NaN
1 0 NaN
-1 1 NaN
1 -58 NaN
-1 0.005 NaN
-1 115 NaN
`; // sample size: 12

// test(sampleEsy);
// console.log("----------------");
// test(sampleAdv);
// console.log("----------------");
// errorTest(sampleErr);