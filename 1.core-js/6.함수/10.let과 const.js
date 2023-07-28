let x;
console.log(x);

//const는 선언만하면 에러남.
//대문자로 지정하여 상수임을 관례적으로 알림

const COLOR_YELLLOW='#ff0';
const COLOR_GREEN='#ff1';
const COLOR_BLACK='#ff2';

// $div,style.background=COLOR_YELLLOW;
// $div,style.background=COLOR_GREEN;
// $div,style.background=COLOR_BLACK;

//객체의 불변성을 위해 const로 선언하기
const kim={
    name:'김철수',
    age:20
};

// kim= {
//     name:박영희,
//     age:30,
// };
kim.name='김마이클';

//전부 const로 해두고 값 변경할일 있으면 let으로 바꾸기