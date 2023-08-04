function foo(){
    //일반 함수 에서 this
    // Node.js환경에서는 global객체 할당
    // 브라우저 환경에서는 window 객체 할당
    console.log(this);
}

// foo();

const model='아반떼';

//★객체에서 this
const car={
    madeBy:'현대',
    model:'그랜져',
    showCarInfo:function(){
        console.log(this);//this==me
        console.log(`제조사 ${this.madeBy} ,모델명 ${this.model}`);
    }
}
car.showCarInfo();

//이벤트 핸들러의 this : function으로 선언할 경우 이벤트를 건 요소
/* const $btn=document.getElementById('btn');
const buttonHandler=function(){
    console.log(this);
    this.style.background='red';
};

$btn.addEventListener("click",buttonHandler);*/


console.log('======================================');
//this를 조작하는 메서는 ★bind★, call,apply

//call
function sayHello(lang1,lang2){
    console.log(`this: `,this);
    console.log(`Hello I'm ${this.name} I can speak ${lang1} and ${lang2}`);
}

const kim={
    name:'김철수',
    age:32,

};

const park={
    name:'박영희',
    age:30,

};

//this를 조작할수 있는 메서드
//parm1:조작할 this전달
//...parm2:원래함수가 전달해야할 파라미터를 전달
// sayHello.call(kim,'english','korean');
// sayHello.call(park,'spanish','korean');

//apply
//call과 같지만 parm2를 배열에 묶어서 전달해야함.
// sayHello.apply(kim,['english','korean']);
// sayHello.apply(park,['spanish','korean']);

//★bind
// call,apply->함수를 바로 실행시킴
// 그러나bind는 this를 조작한 새로운 함수를 반환하고 실행은 시키지 않음.

const bindedSayHello=sayHello.bind(park,'english','korean');
bindedSayHello();

//예시 
const eventHaldler=function(fruit,e){
    console.log(`event 객체`,e);
    console.log(`과일명:`,fruit);
    // console.log(this);
};
const $input=document.querySelector('input');
// document.getElementById('btn').addEventListener('click',eventHaldler.bind($input));
//핸들러한테 추가파라미터 전달 용
document.getElementById('btn').addEventListener('click',eventHaldler.bind(null,'사과'));

