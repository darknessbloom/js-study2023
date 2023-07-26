// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 
// 난이도별 입력 횟수제한이 다르다.

//x이상 y이하의 랜덤 정수 생성공식
//Math.floor(Math.Random()*(y-x+1))+x;
// while(true){
//     let level= +prompt('-------UP&Down게임---------\n[난이도를 설정하세요]\n[1.상(기회3번) | 2.중(기회 6번)|3.하(기회10번)')
//     let chance=0;
//     let t=0;
//     let answer= Math.floor(Math.random()*(10-1+1))+1;
//     if (level===1){
//         chance=3;
//     }else if(level===2){
//         chance=6;

//     }else{
//         chance=3;
//     }
    
//     while(true){
//         let usranswer=+prompt('1~10사이의 숫자를 입력하세요');
//         t++;
//         chance--;
//         if(usranswer===answer){
//         alert(`축하합니다 ${t}번 만에 맞췄습니다.`);
//             break;
//         }
//         else if (usranswer>answer){
//             alert(`Down: 남은 기회 ${chance}`);
//         }
//         else{
//             alert(`Up: 남은 기회 ${chance}`);
//         }
//         if (chance===0){
//             alert('기회를 모두 소진했습니다.GAME OVER');
//             break;
//         }
//     }
//     let agin= prompt('한번더 하시겠습니까? yes/no');
//     if (agin==='yes')continue;
//     else break;
    
// }

/////////////////////해설////////////////////
//초기 난이도 설정하기
//실제로 정답으로 사용한 랜덤 정수 만들기
let secret=Math.floor(Math.random()*100)+1;
//입력 최소 최대값
let min=1,max=100;

//초기 카운트 수 
let initCount;
// let initCount; ->이렇게 해두면 자료형 undifined
//카운트다운변수

//난이도 상수
const HIGH=1;
const MIDDLE=3;
const LOW=10;
let level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');
if(level===1){
    initCount=HIGH;

}else if(level===2){
    initCount=MIDDLE;


}
else if(level===3){
    initCount=LOW;

}
else{
    alert(`잘못입력하였으므로 난이도 하로 자동시작합니다.`);
    initCount=10;

}
let countdown=initCount;
//업다운 판단
//정답인 경우
while(true){
    let answer=+prompt(`숫자를 입력하세요[${min}~${max}]`);
   //입력범위안의 값인지 확인
    if(answer<min || answer>max){
        alert(`범위 안의 숫자를 입력해주세요!`);
        continue;
    }
    countdown--;
    if(answer===secret){
        alert(`정답입니다! ${initCount-countdown}번 만에 맞췄습니다!`);
        break;
    }
    else if(answer<secret){
        alert(`UP!`);
        min=answer+1;
    }
    else{
        alert(`DOWN!`);
        max=answer-1;
    }
    
    //추가게임 종료조건 
    if (countdown==0){
        alert(`패배하셨습니다. 정답은 ${secret}`);
        break;
    }else{
        alert(`${countdown}번의 기회가 남았습니다!`);
    }
}//end while loop
alert(`수고하셨습니다!`);