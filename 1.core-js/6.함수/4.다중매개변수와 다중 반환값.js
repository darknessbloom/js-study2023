//multi parameter: 매개변수의 개수가 n개일 경우
//n개를 하나의 박스(배열, 객체)에 담아서 전달
//정수 n개의 총합 ES5
function add2(numbers){
    let total=0;
    for (let n of numbers){
        total+=n;
    }
    return total;
}
let r1= add2([10,20]);
console.log(r1);

//ES6ver-스프레드
function add2ES6(...numbers){
    let total=0;
    for (let n of numbers){
        total+=n;
    }
    return total;
}

let r2= add2ES6(10,20,30,40,50,60);
//함수 내에서 대괄호로 묶어줌.
//배열을 두개이상 보낼때는 사용금지.
console.log(`r2:${r2}`);

//다중 반환값
// 함수의 반환값은 언제나 하나여야한다!
//f(x)=3a+5b+4c;

//두개의 정수를 전달하면 두수의 덧셈 뺄셈 곱셈 나눗셈을
//반환받고 싶음.
function operateAll(n1,n2){
    return {
        add:n1+n2,
        minus:n1-n2,
        multi:n1*n2,
        devide:n1/n2
    };
}
let results=operateAll(20,10);
// console.log(results[0]);
// console.log(`곱셈결과: ${operateAll(4,5)[2]}`);
//객체를 이용해 반환하는 것이 값을 찾기 수월하다.
console.log(`곱셈결과: ${operateAll(4,5).multi}`);
