//무한루프: 무한하게 반복되는 반복문-악성코드
//횟수를 몰라서 일단 무한하게 돌려놓는 반복문
//반드시 탈출조건 필요
let i=0
while(true){
    i++;
    if(i>100){
        break;
    }
    console.log('hello!!');
}