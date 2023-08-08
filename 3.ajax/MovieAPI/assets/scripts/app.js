//1. 할일 목록 랜더링 true면 체크된 상태로
//2.새로운 할일 추가 -할일 쓰고 더하기 누르면 post요청으로 
// 3.할일 삭제- x버튼 누르면 delete dbjson에객체제거 렌더링
//4.할일 체크기능 -체크 박스를 누르면 put,patch db.json에 done 값을 반대값으로 수정
//5. 할일 수정기능- 초록색 버튼을 누르면 수정모드로 진입 인풋창 활성화 인풋창에 새로웅 텍스트를 쓰고 확인 누르면 put patch로 요청이 나가고 db.json에서도 수정

//URL
const URL='http://localhost:5000/todos';
//todoUL부분
const $todoUl=document.querySelector('.todo-list');

//1.할일 목록 랜더링 true면 체크된 상태로
fetch(URL)
  .then((res) => res.json())
  .then((todoList) => {
    
    // 템플릿을 가져옴
    const $todoTemplate = document.getElementById("single-todo");
    console.log(todoList);
    todoList.forEach(({ id, text,done }) => {
      // 템플릿태그에서 li태그를 추출
      const $todoLi = document.importNode($todoTemplate.content, true);
      // console.log($postLi);
      $todoLi.querySelector("li").dataset.dataId = id;
      $todoLi.querySelector(".checkbox .text").textContent = text;

      //체크박스 체크 기능
      $todoCheck=$todoLi.querySelector(".checkbox input");
      console.log($todoCheck);
      if(done){
        //불완전함 보완하기
        $todoCheck.setAttribute('checked','');
        
      }

      $todoUl.appendChild($todoLi);
    });
  });