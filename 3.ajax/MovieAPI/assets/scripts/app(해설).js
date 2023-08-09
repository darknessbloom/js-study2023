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

//======================= 앱실행 ============================//
const init = () => {
  fetchTodos(URL)
    .then((res) => res.json())
    .then((todos) => {
      renderTodos(todos);
    });
};

init();
