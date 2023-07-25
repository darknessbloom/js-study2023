// && :양쪽이 모두 참일 경우 참
// ||: 둘중 하나만 참이어도 참

// 아이디검증   // 패스워드 검증
// true             true=> true
// true             false=> false
// false             true=> false
// false            false=> false

let t =true;
let f= false;
console.log(t&&t);
console.log(t&&f);
console.log(f&&t);
console.log(f&&f);
console.log('-----------------');
console.log(t||t);
console.log(t||f);
console.log(f||t);
console.log(f||f);

//논리반전 (not)
console.log('--------------');
console.log(!t);
console.log(!f);


let money=0;
if (!money){
    console.log('집에있자');
}
else{
    console.log('쇼핑가자');
}

//조건 연산자(3항) 조건식 ? 참일때 실행할 값 ? 이조건이 거짓일때 값
console.log('--------------');
let food; //먹고싶은 음식
money=7000;
if(money>6000){
   food='돈까스'
}
else{
   food='라면'
}
console.log(`선택된 음식 ${food}`);
console.log(`선택된 음식${money>6000 ?'돈까스':'라면'}`);
