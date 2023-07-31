
const userNames=['김철수','강감찬','박영희'];

//userNames에서 각각의 요소들을 다시 변수로 저장시키고 싶다.
const kim=userNames[0];
const kang=userNames[1];
const park=userNames[2];

console.log(kim);
console.log(kang);
console.log(park);
const[a,b,c]=userNames;
console.log(`a:${a} b:${b} c:${c}`);

const[kk,gg]=userNames;
console.log(`kk:${kk} gg:${gg}`);

const[k,,pp]=userNames;
console.log(`kk:${k} gg:${pp}`);

//변수값 교환하기
let first=10;
let second=20;
[second, first]=[first,second];
console.log(`1:${first} 2:${second}`);

//맨앞두개는 각각의 변수에 저장하고
//나머지는 묶어서 다시 배열로 만들고 싶다.

const [one,three,...rest]=[1,3,5,7,9,11];
console.log(`one:${one},three:${three} rest: ${rest}`);

console.log('=============★스프레드를 활용한 배열 간편 복사 =====================');
const foods=['감자튀김','햄버거','콜라'];
// const copyFoods=foods; //배열 포인터 복사

//배열값 복사 방법
const copyFoods=foods.map(f=>f);
const copyFoods2=foods.slice();
//★스프레드 복사 복사시 값 추가 가능
const copyFoods3=['우동',...foods,'치킨너겟','닭강정'];

foods[1]='치킨버거';
copyFoods[2]='사이다';
console.log('foods:',foods);
console.log('copy:',copyFoods);
console.log('copy2:',copyFoods2);
console.log('copy3:',copyFoods3);


