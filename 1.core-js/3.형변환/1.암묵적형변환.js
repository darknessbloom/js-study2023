let n1=10;
let n2='20';

console.log(n1+n2);

let n3= n1+'';
console.log(typeof n3);
let n4='100'-55;
console.log(n4);

//truthy,falsy
//js에서는 0,'' ,null, undefined,NaN은 거짓이다.
// 나머지는 모두 참이다.

//falsy->암기.
if(undefined) console.log('ok1');
if(null) console.log('ok2');
if(0) console.log('ok3');
if('') console.log('ok5');
if(NaN) console.log('ok4');

//truthy
if(1) console.log('ok6');
if(-100.99) console.log('ok7');
if('  ') console.log('ok8');
if('메롱') console.log('ok9');
if([1,2,3]) console.log('ok10');
if(function(){}) console.log('ok11');
