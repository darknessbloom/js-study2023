let foodList=['닭꼬치','볶음밥','짜장면','족발'];
let findTarget='짜장면';

// let index=-1;
// for (let i=0;i<foodList.length;i++){
//     if (findTarget===foodList[i]){
//         index=i;
//         break;
//     }
// }
// console.log(`찾은 값의 인덱스 ${index}`);
//IndexOf:배열의 특정 요소가 몇번 인덱스에 있는지 탐색
let index=foodList.indexOf(findTarget);
console.log(`찾은 값의 인덱스 ${index}`);
//include():배열의 특정요소가 존재하는지 논리여부 확인

let isPresent=foodList.includes('닭꼬치');
console.log(`존재여부 ${isPresent}`);

//slice():배열을 일정부분 잘라내여, 복사본 배열을 반환.
console.log(`----------------------`);
foodList.push('오뎅','떡볶이');
console.log(foodList);
//앞에서 3개만 추출.
let slicedFoodList=foodList.slice(0,3);
console.log(slicedFoodList);
console.log(foodList);

//
//3번부터 끝까지
console.log('====================');
let sliced2=foodList.slice(3);
console.log(sliced2);
//원본배열 그대로 복사
let sliced3=foodList.slice();
console.log(sliced3);
console.log('===============');
//reverse():배열을 역순으로 정렬,원본이 변하는것에 주의
let arr1=[10,20,30];
let arr2=[9,7,5,3,1];
arr1.reverse();
console.log(arr1);
let arr2Copy=arr2.slice();
arr2Copy.reverse();
console.log(arr2);
console.log(arr2Copy);

//concat():배열 2개를 결합 ,결합한 사본을 리턴
console.log('---------------------');
let concated=arr1.concat(arr2);
console.log(concated);

//splice(): 배열의 특정요소를 제거, 삽입..,원본엣 직접작용
console.log('===================================');
console.log(foodList);
foodList.splice(1,2);
console.log(foodList);
foodList.splice(0,1,'보쌈');
console.log(foodList);

foodList.splice(1,0,'마라탕');
console.log(foodList);

//clear():배열전체 삭제
foodList.splice(0); //0번부터 끝까지 전쳇 삭제.
console.log(foodList);
