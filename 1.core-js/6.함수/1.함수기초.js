// console.log(`김철수님 안녕하세요`);
// console.log(`오늘도 즐거운 하루되세요!`);

// console.log(`박영희님 안녕하세요`);
// console.log(`오늘도 즐거운 하루되세요!`);

// console.log(`홍길동님 안녕하세요`);
// console.log(`오늘도 수고하셨습니다!`);

//함수의 정의
//함수이름은 동사형으로

function sayHello(nickname,isMorning) {
  console.log(`${nickname}님 방가`);
  if(isMorning){

      console.log(`오늘도 즐거운 하루되세요!`);
  }else{
    console.log(`오늘도 수고하셨습니다.`);
  }
}

//함수호출- use
sayHello('김철수',true);
console.log((`===================`));
sayHello('박영희',false);
sayHello('홍길동'),false;

function makeLine()
{
    console.log('====================');
}

for (let i=0;i<4;i++)
    makeLine();


//input이 주어졌을때 output데이터가 나와야ㅏ함.

//원의 넓이를 자주 구하는 상황

function calcAreaCircle(r){
    const PI=3.141592;
    const area=PI*r**2;
    return area;
}

//반지름 5
let result=calcAreaCircle(5);
console.log(`result :${result}`);

let result2=calcAreaCircle(10);
console.log(`result :${result2}`);