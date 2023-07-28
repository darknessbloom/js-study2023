//array:순서가 있는 집합 자료형
let numbers=[10,20,30,40];
console.log(typeof numbers);

console.log(numbers);
console.log(numbers.length);
console.log(`첫번째 데이터 ${numbers[0]}`);
console.log(`마지막 데이터 ${numbers.length-1}`);

let foods=['오렌지','포도','사과','레몬','라임'];
console.log('-----------------------');
console.log(foods);
//배열요소(element)수정
foods[1]='파인애플';
console.log(foods);

//수정시 주의사항
// foods[4]='자몽';
// console.log(foods);

//배열 내부 데이터 전체 참조(순회)
console.log(`1번째 요소 ${foods[0]}`);
console.log(`2번째 요소 ${foods[1]}`);
console.log(`3번째 요소 ${foods[2]}`);

// for(let i=0;i<foods.length;i++){
//     console.log(`${i+1}번째 요소 ${foods[i]}`);
// }
for (let f of foods) {
    console.log('저장된 과일 '+f);

}
//ES6:모던 자바스크립트 문법
foods.forEach((f,i) => {
    console.log(`${i+1}번째 과일과일:${f}`);
});