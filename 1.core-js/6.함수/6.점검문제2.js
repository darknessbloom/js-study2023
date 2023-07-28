/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...numbers){
    let total=0;
    let count=numbers.length;
    for (number of numbers){
        total+=number;
    }
    return{
        total:total,
        avg:total/count
    };
}
let result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);

//해설
function calcNumbersTotalAndAverage2(...numbers){
    let total=0;
    //총합구하기
    for(let n of numbers){
        total+=n;

    }
    let avg=total/numbers.length;
    //★키와 키값의 변수이름가 같으면 하나만 써도 적용됨. 
    return {
        total,
        avg
    };

}


let result2 = calcNumbersTotalAndAverage2(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result2.total}, 평균: ${result2.avg}`);
