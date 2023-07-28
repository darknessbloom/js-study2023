/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
*/

//함수 정의문
function add(n1,n2){
    console.log(`함수 add가 호출됨!`);
    return n1+n2;
}

const plus=add(1,2);
console.log(plus);
//★변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
const plusf=add;
console.log(plusf);
//변수이름으로 함수를 쓸수있다.
const r1=plusf(10,20);
console.log(`r1:${r1}`);

//무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
//익명함수:함수리터럴(값) 세미콜론 붙여야함.
const foo=function(){
    console.log('함수 foo 호출');
};
foo();

/*일반함수와 익명함수차이
    - 일반함수:함수를 정의한 부분 윗부분에서 함수호출가능
    - 익명함수:함수를 정의한 부분 윗부분에서 함수호출불가
*/

//변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
//익명의 함수도 가능!
//const array=[10,'hello',false,{},[],☆add];
const array=[10,'hello',
        false,
        {},[],add,
        function(){console.log('배열안에서 만든 함수 콜');}];
console.log(array[5](7,8));
array[6]();

console.log('==================================');
const dog={
    name:'초코',
    age:3,
    favorite:['산책','낮잠'],
    play:function(){
        console.log(`${this.name} 멍멍이가 신나게 놉니다`);
    }
}

dog.play();//함수니까 ()붙여야함.


//ES6:화살표 함수
/*
 함수 정의문
 function mulfiply(n1,n2){
     return n1*n2;
 }*/
/*  함수 표현식
const multiply=function(n1,n2){
    return n1*n2;
};*/

//화살표 함수
//★함수의 내부코드가 단 한줄이면 중괄호 생략가능
//★그 한줄의 코드가 리턴문이면 return 키워드 생략가능
const multiply=(n1,n2)=>n1*n2;
const r3=multiply(4,7);
console.log(`r3:${r3}`);
//매개변수가 없어도 ()는 써야함
//★매개변수가 단 한개라면 소괄호 생략가능!
const sayHello=name=>console.log(`${name} 안녕하세요!`);
    

sayHello('뽀로로');
sayHello('루피');
sayHello('크롱');

const kim={
    name:'김철수',
    age:30,
    greeting:sayHello,
    dance:()=>console.log('신나게 춤을 춥니다')
};
kim.greeting('대길이');
kim.dance();

const pow=number=>number**2;
const result=pow(6);
console.log(result);




