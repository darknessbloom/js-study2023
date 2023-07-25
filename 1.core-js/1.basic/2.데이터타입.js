let age1 = 5; //10wlstn 5 2진수 101
let age2 = "5"; //10진수 85 2진수 1010101
let num = 9; //실제로 9.0저장
console.log(typeof num);
// js는 정수실수 구분하지 않고 모두 실수 처리함
console.log(5 / 2);
//문자타입
let s1 = "str1";
let s2 = "str2";
let s3 = `STR3`; //백틱;
console.log(s3);
let tag = '<ul>\n<li><a href="#">link</a></li></ul>';

let tag_ = `<ul>
<li>
<a href=#>link</a>
</li>
</ul>`;
console.log(tag_);
let userName=`뽀로로`;
let userAge=5;
let msg='제이름은'+userName+'이구요 나이는'+userAge+'살이에요!';
console.log(msg);
let message = `제이름은 ${userName}나이는'${userAge}+'살이에요!`;

// 논리타입
let flag=false;
console.log(typeof flag);
// undefined 타입: 변수만들고 값 안넣어놓음 (실수)

// null타입:의도적으로 값이 없다는 표현을 함)(고의)
let address='충남 청양군';
address=null;
console.log(address);