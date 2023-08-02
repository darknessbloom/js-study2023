// index.html에서 활용할 이벤트 처리 핸들러...........
//현재 계산기에 그려질 숫자

//계산 이력을 모아둘 배열
const logEntries=[];

let currentResult = 0;
//로그 이력을 만드는 함수
const writeToLog=(operation,prevResult,number,result)=>{
    //하나의 로그객체(연산, 이전결과,연산숫자, 연산결과)
    const logObject={
        operation,
        prevResult,
        number,
        result

    };
    logEntries.push(logObject);
    console.log(logEntries);
};
//사용자의 입력값을 읽어오는 함수
const getUsetNumberInput = () => +$userInput.value;

//계산 로그를 만들고 화면에 렌더링 하는 함수
const createLogAndRenderOutput = (operateMark,originResult, calcNumber) => {
  const calcDescriptionLog = `${originResult}${operateMark}${calcNumber}`;
  outputResult(currentResult, calcDescriptionLog);
};
//더하기 버튼 이벤트 핸들러
const addHandler = () => {
  console.log("+ button click");
  //입력창에 입력한 숫자 읽기
  const enteredNumber = getUsetNumberInput();
  //계산전 값 백업
  const originResult = currentResult;
  //실제 계산 결과 반영
  currentResult += enteredNumber;
  createLogAndRenderOutput('+',originResult, enteredNumber);
  writeToLog('ADD',originResult,enteredNumber,currentResult);
  
  //화면에 랜더링
};

const subtractHandler = () => {
    console.log("- button click");
    const enteredNumber = getUsetNumberInput();
    
    const originResult = currentResult;
    currentResult -= enteredNumber;
    createLogAndRenderOutput('-',originResult, enteredNumber);
    writeToLog('SUD',originResult,enteredNumber,currentResult);
};

const multiplyHandler = () => {
    console.log("X button click");
    const enteredNumber = getUsetNumberInput();
    const originResult = currentResult;
    currentResult *= enteredNumber;
    createLogAndRenderOutput('x',originResult, enteredNumber);
    writeToLog('MULTI',originResult,enteredNumber,currentResult);
};
const divideHandler = () => {
    console.log("/ button click");
    const enteredNumber = getUsetNumberInput();
    const originResult = currentResult;
    currentResult /= enteredNumber;
    createLogAndRenderOutput('/',originResult, enteredNumber);
    writeToLog('DIVDE',originResult,enteredNumber,currentResult);
  
};
//================ 이벤트 핸들러 바인딩 ========================//

$addBtn.addEventListener("click", addHandler);
$subtractBtn.addEventListener("click", subtractHandler);
$multiplyBtn.addEventListener("click", multiplyHandler);
$divideBtn.addEventListener("click", divideHandler);
