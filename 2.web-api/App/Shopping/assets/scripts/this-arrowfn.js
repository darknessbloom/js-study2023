// 화살표 함수와 this의 관계

const dog={
    name:'뽀삐',
    regularFn:function(){
        console.log(`regular: `,this);//자기자신 객체
    },
    arrowFn:()=>{console.log(`arrow: `,this);}//this-> window객체
};
dog.regularFn();
dog.arrowFn();

console.log(`=========================`);
const cat={
    name:'나비',
    introduce:function(){
        console.log(`intro this`,this);
        setTimeout(()=>{//arrow함수는 this가 없어서 상위의 this참조함.
            console.log(`setTime`,this);
            console.log(`안녕 내 이름은 ${this.name}이에요`);

        },2000);
    }
};
cat.introduce();



