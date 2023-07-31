// 자바스크립트 함수는 또다른 함수를 리턴 할수 있음.
function add(n1,n2){
    return n1+n2;
}
function calculator1(){
    console.log('I am Calculator');
    return add;
}
const result=calculator1();
console.log(result(5,8));
console.log(calculator1()(7,4));

function calculator2(){
    console.log('I am Calculator');
    return function (n1,n2){
        return n1+n2;
    };
}

function calculato3(){
    // console.log('I am Calculator');
    return (n1,n2)=>n1+n2;
}

const calculato4=()=>(n1,n2)=>n1+n2;
console.log('=========================================');

// let count=0;//전역변수
// //카운트를 증가시키는 함수
// const increase=()=>++count;

// console.log(increase());
// console.log(increase());
// console.log(increase());

// const increase=()=>{
//     let count=0;//지역변수
//     return ++count;
// }
// console.log(increase());
// console.log(increase());
// console.log(increase());

//count 를 증가시키늠 함수을 리턴하는 클로저를 생성
// const increaseClosure=()=>{
//     let count=0;
//     return()=> ++count;
// }

// const increase=increaseClosure();
// console.log(increase());
// console.log(increase());
// console.log(increase());

const increase=( ()=>{
    let count=0;
    return()=> ++count;
})();
console.log(increase());
console.log(increase());
console.log(increase());

//즉시 실행 함수 :1회성 호출 함수를 만들때 주로 사용

// function add(n1,n2){
//     return n1+n2;
// }
// const r1=add(10,20);


const r1=(function (n1,n2){
    return n1+n2;
})(10,20);
console.log(r1);