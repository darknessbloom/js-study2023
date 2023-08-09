const URL = "http://localhost:5000/todos";

const $todoList = document.querySelector(".todo-list");

// 1.db.json에 있는 todo를 화면에 렌더링하기
const fetchTodos = (url, method = "GET", payload = null) => {
  const requestInit = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};
//화면에 todos를 랜더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿을 가져옴
  const $liTemplate = document.getElementById("single-todo");

  todoList.forEach(({ id, text, done }) => {
    // console.log('todo: ', todo);
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector("li").dataset.id = id; // data-id 속성 부여
    $newLi.querySelector(".text").textContent = text;

    //체크박스 가져오기
    const $checkBox = $newLi.querySelector(".checkbox input[type=checkbox]");
    $checkBox.checked=done;
    if(done)$checkBox.parentNode.classList.add('checked');
    $todoList.appendChild($newLi);
  });
};
//---------이벤트 관련함수
const addTodoHandler=e=>{
    //1. 클릭이벤트가 잘 일어나는가?
    console.log('클릭');
    //클릭하면 일단 왼쪽에 인풋의 텍스트를 읽어야함.
    //2-1 인풋부터 찾자
    const $textInput=document.getElementById('todo-text');
    //2-2인풋안에 텟스트를 꺼내자
    const inputText=$textInput.value;
    
    //3. 서버에 이데이터를 보내서 저장해야함
    //->fetch가 필요 저장이니까 POST!
    // -> payload를 API 스펙에 맞게 만들어 보내야함.
    const payload={
        text:inputText,
        done:false
    }

    fetchTodos(URL,'POST',payload)
    .then(res=>{
        if(res.status===200||res.status===201){
            alert(`등록성공!`);
        }
        else{
            alert(`등록실패!`);
        }
    });
}

//step2 할일 등록기능
const $addBtn=document.getElementById('add');
$addBtn.addEventListener('click',addTodoHandler);

//step3. 할일 삭제기능
const deleteTodoHandler=e=>{
    if(!e.target.matches('.remove span')) return;

    //특정 할일을 지우기위해 그 할일의 아이디 값을 알아야함.
    const id=e.target.closest('.todo-list-item').dataset.id;
    // console.log(id);
    // 서버에 삭제 요청하기
    fetchTodos(`${URL}/${id}`,'DELETE')
    .then(res=>{
        if(res.status===200||res.status===201){
            alert(`삭제성공!`);
        }
        else{
            alert(`삭제실패!`);
        }
    });
}
$todoList.addEventListener('click',deleteTodoHandler);


//======================= 앱실행 ============================//
const init = () => {
  fetchTodos(URL)
    .then((res) => res.json())
    .then((todos) => {
      renderTodos(todos);
    });
};

init();
