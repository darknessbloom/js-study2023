let n1 = +prompt('첫번째 숫자');
let n2 = +prompt('두번째 숫자');
let total=0;
// let start,end;

// if(n1<n2){
//     start=n1;
//     end=n2;
// }
// else{
//     start=n2;
//     end=n1;
// }
// for(let i=start;i<=end;i++){
//     total+=i;
// }

if (n1>n2){
    let t=n1;
    n1=n2;
    n2=t;
}
for(let i=n1;i<=n2;i++){
    total+=i;
 }
alert(`${start}~ ${end}까지 누적합 ${total}`)