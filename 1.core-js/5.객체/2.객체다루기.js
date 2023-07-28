let phone={
    company:'삼성',
    color:'펄 화이트',
    model:'갤럭시 S23',
    price:1200000
};

//프로퍼티 값 수정
phone.company='애플';
phone['model']='아이폰 XR';

console.log(phone);

//프로퍼티 동적추가
phone.madeDate='2020-03-05';
console.log(phone);

//프로퍼티 동적삭제
delete phone.price;
console.log(phone);

//객체의 반복문 for~ in
console.log(`======================`);
for(let x in phone){
    //키가 반복됨.
    // console.log(typeof x); string
    console.log(`key: ${x}`);
    //값 참조시 이런 방법으로 
    console.log(`value: ${phone[x]}`);
}
console.log(`======================`);
//객체 key 존재유무 확인 키를 문자열로 써서 확인하기.
let flag='injextion' in phone;
console.log(flag);

let key='fruits';
if(key in phone){
    console.log(`수정`);
}else{
    console.log(`추가`);
}

