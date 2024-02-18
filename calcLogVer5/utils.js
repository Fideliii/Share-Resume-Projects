// utility functions
function reciprocate(num) {
  return 1 / num;
}

const consLogCols = "Test_ID|Base|Argument|Answer|Expected Answer|Correct";
let decimalNum = 10000000000; // try(10000, 100000, 1000000, 10000000000)
function roundDecimals(num) {
  return Math.round(num * decimalNum) / decimalNum;
}

module.exports = {
  reciprocate,
  consLogCols,
  roundDecimals,
  decimalNum,
};
