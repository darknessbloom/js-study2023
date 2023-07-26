let num=1234567;
//num이 과연 몇자리 수인가?
// let count=0;
// while(true){
//     num=Math.floor(num/10);
//     count++;
//     let rest=num%10;
//     if (rest===0) break;
// }
// console.log(`자리수 ${count}`);
// num=num.toString();//숫자를 문자로 변환
// console.log(`자리수: ${num.length}`);

let x=30,y=40;
//문자로 변환
let result=String(x)+y.toString();
console.log(`result ${result}`);
let z='100';
//숫자로 변환
let result2=Number(z)+200;// +z 도가능
console.log(`result2 ${result2}`);

//논리로 변환
let money=7000;
let hasMoney=!!money;
//첫번째 !역할 : 숫자를 논리로 변환시켜줌.
console.log(`돈이 있는가? ${hasMoney}`);