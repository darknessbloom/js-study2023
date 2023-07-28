
function addNumber(n1,n2){
    //반환값:함수 호출이 끝나면 함수 호출부로 전달된 값
    return n1+n2;
    //반환문은 함수의 탈출문이다.
    let n3=50;
    console.log('dhfdjkhdjkhkj');

}

//
let r1=addNumber(5,7);
console.log(r1);

console.log(addNumber(10,20));

//함수의 중첩호출
//안쪽부터 실행,같은 레벨이면 왼쪽부터 실행
let r2=addNumber(addNumber(addNumber(3,2),10),addNumber(5,8));
console.log(r2);

//리턴이 없는함수 :void 함수
//소비목적의 함수
//다른 변수에 담지도 말고 다른함수의 매개값으로 쓰지도 말아라
function muti(n1,n2){
    let result=n1*n2;
    console.log(`${n1} x ${n2}=${result}`);
}

muti(3,2);
muti(addNumber(1,2),addNumber(3,4))//가능
// addNumber(muti(1,2),muti(2,4))//불가능

//return의 탈출의 의미

function callName(nickName){
    //금지어 목록
    let prohibits=['돌아이','멍청이','빠가'];
    if(prohibits.includes(nickName)){
        console.log(`고운말을 쓰렴`);
        return;
    }
    console.log(`${nickName} hi~`);
}
console.log('===================');
callName('멍청이');

function stopLoop(){
    while(true){
        let flag=prompt('명령어를 입력하세요!');
        if (flag==='stop'){
            return;
        }
        alert(flag);
    }
    alert('수고수고링~');
}
stopLoop();