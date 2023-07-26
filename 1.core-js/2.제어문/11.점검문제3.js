
let qNum=1;//문제 넘버링
let correctCount=0,wrongCount=0;
while(true){
    //랜덤 정수2개 생성
    let firstNumber=Math.floor(Math.random()*20)+1;
    let secondNumber=Math.floor(Math.random()*20)+1;
    //부호만들 랜덤 정수 생성
    let markNum=Math.floor(Math.random()*3);
    let mark;
    let realAnswer; //실제 정답
    if(markNum===0){
        mark='+';
        realAnswer=firstNumber+secondNumber;
    }
    else if(markNum===1){
        mark='-';
        realAnswer=firstNumber-secondNumber;
    }
    else{
        mark='x';
        realAnswer=firstNumber*secondNumber;
    }
    userAnswer= +prompt(`Q${qNum++} ${firstNumber} ${mark} ${secondNumber}=?`);
    //정답확인
if(userAnswer==0){
    alert(`게임을 종료합니다.`);
    break;
}
if(userAnswer===realAnswer){
    alert('정답입니다');
    correctCount++;
}
else{
    alert('틀렸습니다!');
    wrongCount++;
}
}

alert(`정답횟수 :${correctCount}회,틀린 횟수 ${wrongCount}`);