//단축평가
/*
    t&&t ->t 
    t&&f ->t
    f&&t ->f
    f&&f ->f

    t||t -> t
    t||f -> t
    f||t -> t
    f||f -> f
 */
//or 연산 :첫번째 truthy반환
console.log('hello'||'world');
console.log(0||'안녕');

//and 연산 첫번째 falsy반환
console.log('HELLO' && 'WORLD');
console.log(null && '메롱');
/*
<h1>웰컴 투 홈페이지</h1>
isLogin && <h2>xxx님 환영합니다.</h2>

coupon && seondCoffee()

*/