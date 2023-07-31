const emp={
    empName:'뽀로로',
    age:4,
    hiredate:'2021-01-01',
    birthDay:'2020-01-01'
};

//const{분해하고 싶은 객체의 키값(순서상관없음)}=객체;
const{empName,birthDay,age}=emp;
console.log(`내이름은 ${empName} 나이는 ${age}살 입니다. 그리고 생일는 ${birthDay}`);

//const{키값:별칭,}=객체;
const{empName:en,birthDay:bd,age:a}=emp;
console.log(`내이름은 ${en} 나이는 ${a}살 입니다. 그리고 생일는 ${bd}`);

const{birthDay:bdd,...others}=emp;
console.log(others);

//객체복사

console.log('====================');
const copyEmp={  
    ...emp,
    address:'청양군',
    hobbies:['산책','수영'],
    age:17  //원래있던 객체값 수정
};
copyEmp.empName='루피';
console.log(emp);
console.log(copyEmp);
