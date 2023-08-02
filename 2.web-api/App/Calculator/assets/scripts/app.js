// index.html에서 활용할 이벤트 처리 핸들러...........
//현재 계산기에 그려질 숫자
//연산타입 상수로 관리
const ADD='ADD';
const SUB='SUB';
const MULTI='MULTI';
const DIVIDE='DIVIDE';

//계산 이력을 모아둘 배열
const logEntries = [];

const $logBox = document.querySelector("#operatelog .log-box");
let currentResult = 0;
let seq = 0;
//operation문자로 기호를 생성하는 함수
const convertOperationToMark = (operation) => {
    let mark;
    switch (operation) {
      case 'ADD': 
        mark = '+'; 
        break;
      case 'SUB': 
        mark = '-'; 
        break;
      case 'MULTI': 
        mark = 'x'; 
        break;
      case 'DIVIDE': 
        mark = '/'; 
        break;
    }
    return mark;
  };
  
//로그 이력을 렌더링 하는 함수
const renderToLog = ({
  prevResult: fisrtNumber,
  number: secondNumber,
  result,
}) => {
  const $newLi = document.createElement("li");
  $newLi.classList.add("log-entries__item");
  $newLi.textContent = `#${++seq}. ${firstNumber} ${CONVE(operation)} ${secondNumber} = ${result}`;

  $logEntries.appendChild($newLi);
};

//로그 이력을 만드는 함수
const writeToLog = (operation, prevResult, number, result) => {
  //하나의 로그객체(연산, 이전결과,연산숫자, 연산결과)
  const logObject = {
    operation,
    prevResult,
    number,
    result,
  };
  logEntries.push(logObject);
  renderToLog(logObject);

  // console.log(logEntries.logObject);
};
//사용자의 입력값을 읽어오는 함수
const getUsetNumberInput = () => +$userInput.value;

//계산 로그를 만들고 화면에 렌더링 하는 함수
const createLogAndRenderOutput = (operateMark, originResult, calcNumber) => {
  const calcDescriptionLog = `${originResult}${operateMark}${calcNumber}`;
  outputResult(currentResult, calcDescriptionLog);
};

//계산기능 헬퍼함수
const calculate = (type) => {
  const enteredNumber = getUsetNumberInput();
  const originResult = currentResult;
  let mark;
  if (type === ADD) {
    mark = "+";
    currentResult += enteredNumber;
  } else if (type === SUB) {
    mark = "-";
    currentResult -= enteredNumber;
  } else if (type === MULTI) {
    mark = "x";
    currentResult *= enteredNumber;
  } else {
    mark = "/";
    currentResult /= enteredNumber;
  }
  console.log(`${mark} button click`);
  createLogAndRenderOutput(mark, originResult, enteredNumber);
  writeToLog(type, originResult, enteredNumber, currentResult);
};
//더하기 버튼 이벤트 핸들러
const addHandler = () => {
  calculate("ADD");

  //화면에 랜더링
};

const subtractHandler = () => {
  calculate(SUB);
};

const multiplyHandler = () => {
  calculate(MULTI);
};
const divideHandler = () => {
  calculate(DIVIDE);
};
//================ 이벤트 핸들러 바인딩 ========================//

$addBtn.addEventListener("click", addHandler);
$subtractBtn.addEventListener("click", subtractHandler);
$multiplyBtn.addEventListener("click", multiplyHandler);
$divideBtn.addEventListener("click", divideHandler);
