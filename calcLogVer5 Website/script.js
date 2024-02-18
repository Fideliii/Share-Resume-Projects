const baseInp = document.getElementById("base");
const argInp = document.getElementById("argument");
const answerPara = document.getElementById("answer");

function calculate() {
  const base = (baseInp.value == "e") ? Math.E : Number(baseInp.value);
  const arg = (argInp.value == "e") ? Math.E : Number(argInp.value);
  const answer = calcLog(base, arg);

  (isNaN(base) || isNaN(arg)) ? answerPara.textContent = "Please enter a valid number." : answerPara.textContent = answer;
};