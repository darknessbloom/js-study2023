for (let i=1;i<=10;i++){
    console.log(i);
    if(i===5){

        break;
    }
    console.log('break 아래코드'+i);
}
console.log('반복문 종료!');

console.log('===============');

outer: for(let n=0;n<3;n++){
    inner: for (let m=0;m<2;m++){
        if(n===m){
            break inner;
        }
        if(n===2) break outer;
        console.log(`[${n},${m}]`);
    }
}

