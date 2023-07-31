const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];

//배열 고차함수
//forEach():배열의 요소를 반복하면서 하나씩 소비

userList.forEach((user) => {
  console.log(`제이름은 ${user.userName} ${user.address}에 살아요`);
});

const foodList = ["짜장면", "제육볶음", "치킨"];
foodList.forEach((food) => console.log(`${food} 맛있어요!`));

console.log("==============================");

//배열 고차함수:filter
//특정조건에 의해 필터링된 새로운 ★배열★을 반환
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter((n) => n % 3 === 0);
console.log(newArray);

//회원중 아이디가 abc1234인 사람을 필터링 해줘
//객체는 필터쓸수 없음

const newUserList = userList.filter((user) => user.account === "abc1234");
console.log(newUserList);

//배열 고차함수 map
//특정 배열에서 특정 조건에 맞는 값들만 따로 모아서
//새롭게 매핑한 배열을 반환
console.log("<============================>");
const doubled = numbers.map((n) => n * n);
console.log(doubled);

const plusTwo = numbers.map((n) => n + 2);
console.log(plusTwo);

const firstHobby = userList.map((user) => user.hobbys[0]);
console.log(firstHobby);

//filter -> 10개짜리 배열에서 조건에 맞는 몇개만 필터링
// 필터의 결과 배열은 개수가 10개 이하일 가능성이 크다.

//map -> 10개짜리 배열에서 특정 조건대로 10개를 전부 매핑
//맵의 결과 배열개수는 무조건 10개다.

//회원목록에서 회원의 이름과 주소만 추출하고 싶음.
const prettierUserList = userList.map((user) => {
  return {
    userName: user.userName,
    addr: user.address,
  };
});

console.log(prettierUserList);

console.log("=========================");

const appleBasket = [
  {
    color: "green",
    sweet: 13,
  },
  {
    color: "red",
    sweet: 14,
  },
  {
    color: "red",
    sweet: 11,
  },
  {
    color: "green",
    sweet: 6,
  },
  {
    color: "green",
    sweet: 7,
  },
  {
    color: "green",
    sweet: 9,
  },
];

//사과중에 녹색이면서 당도가 9이상인 사과만 선별해서
//이사과는 xxx색이면서 당도는 XXX입니다.
//라는 문자열에 매핑되어있는 배열을 리턴해주세요.
//const filteredApples=appleBasket.filter(apple=> apple.color==='green'&&apple.sweet>=9);
//const mappedApples=appleBasket.filter(apple=> apple.color==='green'&&apple.sweet>=9).map(apple=>`이사과는 ${apple.color}색이면서 당도는 ${apple.sweet} 입니다`);
appleBasket
    .filter(apple=> apple.color==='green'&&apple.sweet>=9)
    .map(apple=>`이사과는 ${apple.color}색이면서 당도는 ${apple.sweet} 입니다`)
    .forEach(a=>console.log(a));

//회원목록에서 서울에사는 회원들의 
//두번째 취미만배열에 모아서
//xxx회원님의 두번째 취미는 xxx입니다,를  반복해셔 출력하시오.
console.log('<==========================================>');
userList //[{5},{5},{5},{5}]
    .filter(user=>user.address==='서울')//[{5},{5},{5}]
    .map(user=>{
        return{
            name:user.userName,
            secondHobby:user.hobbys[1]
        };
        })//['축구','테니스','테니스]
    .forEach(user=> console.log(`${user.name}회원의 두번째 취미는 ${user.secondHobby}`));



