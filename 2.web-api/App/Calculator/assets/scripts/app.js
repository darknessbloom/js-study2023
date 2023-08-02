// index.html에서 활용할 이벤트 처리 핸들러...........
//현재 계산기에 그려질 숫자

let currentResult=0;

//더하기 버튼 이벤트 핸들러
const addHandler=()=>{
    console.log('+ button click');
    //입력창에 입력한 숫자 읽기
    const enteredNumber=+$userInput.value;
    //로그 생성
    const calcDescriptionLog=`${currentResult}+${enteredNumber}`;
    //실제 계산 결과 반영
    currentResult+=enteredNumber;

    //화면에 랜더링
    outputResult(currentResult,calcDescriptionLog);
};

const subtractHandler=()=>{
    console.log('- button click');
    const enteredNumber=+$userInput.value;
  
    const calcDescriptionLog=`${currentResult}-${enteredNumber}`;
 
    currentResult-=enteredNumber;

    outputResult(currentResult,calcDescriptionLog);
    
};

const multiplyHandler=()=>{
    console.log('X button click');
    const enteredNumber=+$userInput.value;
  
    const calcDescriptionLog=`${currentResult}x${enteredNumber}`;
 
    currentResult*=enteredNumber;

    outputResult(currentResult,calcDescriptionLog);
    
};
const divideHandler=()=>{
    
    console.log('/ button click');
    const enteredNumber=+$userInput.value;
  
    const calcDescriptionLog=`${currentResult}/${enteredNumber}`;
 
    currentResult/=enteredNumber;

    outputResult(currentResult,calcDescriptionLog);
};
//================ 이벤트 핸들러 바인딩 ========================//


$addBtn.addEventListener('click',addHandler);
$subtractBtn.addEventListener('click',subtractHandler);
$multiplyBtn.addEventListener('click',multiplyHandler);
$divideBtn.addEventListener('click',divideHandler);
