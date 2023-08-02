// 프로그램 전역적으로 사용할 변수, 함수 정의
const $userInput = document.getElementById('input-number');
const $addBtn = document.getElementById('btn-add');//+
const $subtractBtn = document.getElementById('btn-subtract');//-
const $multiplyBtn = document.getElementById('btn-multiply');//곱하기
const $divideBtn = document.getElementById('btn-divide');//나누기

const $currentResultOutput = document.getElementById('current-result');
const $currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  $currentResultOutput.textContent = result;
  $currentCalculationOutput.textContent = text;
}
