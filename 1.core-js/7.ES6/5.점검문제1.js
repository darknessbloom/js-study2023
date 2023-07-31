const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

/*자료구조
  traders={trader: {name,city},
    year: 2023,
    value: 500000,
  }*/

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

//내꺼
const trderInfoAt2022 = traders
  .filter((trade) => trade.year === 2022)
  .map((t) => {
    return {
      name: t.trader.name,
      city: t.trader.city,
    };
  });
console.log(trderInfoAt2022);

//해설
const tradeIn2022=traders.filter(trs => trs.year===2022);
const traderIn2022=tradeIn2022.map(trs=> trs.trader)
console.log(tradeIn2022);
console.log(traderIn2022);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const citys = traders.map((t) => t.trader.city);
console.log(citys);

//해설
const mappedCities = traders.map((trs) => trs.trader.city);
//중복제거
const cities=[...new Set(mappedCities)];
console.log(`cities ${cities}`);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.

const workedAtDaejon=traders
                    .filter(c=> c.trader.city==='대전')
                    .map(t=> {
                        return {
                            name:t.trader.name,
                            city:t.trader.city
                        };
                    });
console.log(workedAtDaejon);
//해설
traders
  .filter(trs=>trs.trader.city==='대전')
  .map(trs=>trs.trader)
  .forEach(trd=>console.log(trd));
          

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const allTraders = traders.map((t) => t.trader.name);
console.log(allTraders);

//해설
const mappedNames=traders.map((t) => t.trader.name);
console.log(mappedNames);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
const totalCostAtSeoul = traders
  .filter((t) => t.trader.city === "서울")
  .map((t) => t.value);
let totalValue = 0;
totalCostAtSeoul.forEach((v) => {
  totalValue += v;
});
console.log(`서울에사는 거래자의 모든 거래액 총합 : ${totalValue} `);

//해설
let total=0;
// const filteredTraders=traders
//   .filter(trs=> trs.trader.city==='서울')
//   .map(trs=>trs.value)
//   .forEach(val=>total+=val);
//reduce 함수:배열을 반복해서 각요소에 콜백함수를 적용한
//            결과를 누적하는 함수
const totalvales =traders
  .filter(trs=> trs.trader.city==='서울')
  .reduce((acc,curr)=>acc+curr.value,total);
  console.log(`서울에사는 거래자의 모든 거래액 총합 : ${totalvales}원 `);