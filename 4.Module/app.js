import{$btn} from './getDOM.js';
import ABC,{ clickHandler ,Dog } from './event.js';
const init=()=>{
    $btn.style.background='aqua';
    $btn.addEventListener('click',clickHandler);
    const dog=new ABC('초코',3);
    dog.info();
}