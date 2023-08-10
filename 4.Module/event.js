// getDOM.js에서 가져온거
import { $p as $para } from './getDOM.js';

// event.js에서 만든거
const $p = document.querySelector('p');

export const clickHandler = e => {
  $para.textContent = '하이!';
};

// export default->한파일에서 하나만

export default class  {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    alert(`${this.name}: 저는 ${this.age}살입니다!`);
  }
}