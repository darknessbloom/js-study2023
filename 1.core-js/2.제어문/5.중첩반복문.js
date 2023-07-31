let cnt=0;
for (let i=0;i<3;i++){//3회
    for(let j=0;j<2;j++){//2회
        for(let k=0;k<4;k++){
            cnt++;
        }
        // console.log(`${i} ,${j} `);//6회
    }
}
console.log(`총반복 횟수 ${cnt}`);

// 구구단 출력
//2단
for (let level=2;level<=9;level++ ){

    console.log(`===구구단 ${level}단===`);
    for(let line=1;line<=9;line++){
        console.log(`${level}x${line}=${level*line}`);
    }
    console.log(`=======================`);
}
