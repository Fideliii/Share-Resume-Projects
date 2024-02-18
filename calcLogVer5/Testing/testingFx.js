utils = require("../utils.js");
calc = require("../main.js");
testData = require("./testingData.js");
externalTD = require("./externalTestingData.js");

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
  console.log(utils.consLogCols);

  for (let arr of intSample) {
    let ans = utils.roundDecimals(calc.log(arr[0], arr[1]));
    let expectedAns = utils.roundDecimals(arr[2]);
    let consoleMessage = `${intSample.indexOf(arr) + 1}|${arr[0]}|${arr[1]}|${ans}|`;

    Math.abs(ans - expectedAns) <= calc.epsilon || ans == expectedAns
      ? (consoleMessage += `${expectedAns}|${true}`)
      : (consoleMessage += `${expectedAns}|${false}`);
    console.log(consoleMessage);
  }
  return;
}
function errorTest(sample) {
  const intSample = organizeData(sample);
  console.log(utils.consLogCols);

  for (let arr of intSample) {
    let ans = utils.roundDecimals(calc.log(arr[0], arr[1]));
    let expectedAns = utils.roundDecimals(arr[2]);
    let consoleMessage = `${intSample.indexOf(arr) + 1}|${arr[0]}|${arr[1]}|${ans}|${expectedAns}|${isNaN(ans)}`;
    console.log(consoleMessage);
  }
  return;
}
function quickLog(base, arg) {
  let ans = calc.log(base, arg);
  console.log(`log ${base} (${arg}) = ${ans}`);
  return ans;
}

// quickLog(Math.E, 202928)

// Testing Data (93 = 17 + 50 + 26)
// test(testData.sampleEsy);
// console.log("");
// test(testData.sampleAdv);
// console.log("");
errorTest(testData.sampleErr);

// External Testing Data (74 = 3 + 5 + 12 + 32 + 22)
// test(externalTD.cliffNotesSample);
// console.log("");
// test(externalTD.geoGebraSample);
// console.log("");
// test(externalTD.math10Sample);
// console.log("");
// test(externalTD.khanAcaSample);
// console.log("");
// test(externalTD.ck12Sample);
// console.log("");
