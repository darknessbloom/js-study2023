// 1. 할일 입력후 엔터쳐도 등록이 되도록 구현 0
// 2. 아무것도 입력안하거나 스페이스바만 쭉치고 입력했을 때 등록 거절0->모달이나 css 바꾸기
// 3. 헤더 일정관리 텍스트에 '일정관리 (1/3개 완료됨)'

const URL = "http://localhost:5000/todos";

const $todoList = document.querySelector(".todo-list");

// step1. db.json에 있는 todos를 화면에 렌더링하기
const fetchTodos = (url, method = "GET", payload = null) => {
  const requestInit = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿을 가져옴
  const $liTemplate = document.getElementById("single-todo");
  let countDone=0;
  todoList.forEach(({ id, text, done }) => {
    // console.log('todo: ', todo);
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector("li").dataset.id = id; // data-id 속성 부여
    $newLi.querySelector(".text").textContent = text;

    // 체크박스 가져오기
    const $checkbox = $newLi.querySelector(".checkbox input[type=checkbox]");
    // console.dir($checkbox);
    $checkbox.checked = done;

    if(done){
      $checkbox.parentNode.classList.add("checked");
      countDone+=1;
    }

    $todoList.appendChild($newLi);
  });
  if(todoList.length!==0){
    countDoneList(countDone,todoList.length); //일정완료를 띄워주는 함수
  }

};

// ========= 이벤트 관련 함수 ========= //
const countDoneList=(countDone,allTodo)=>{
  const $titleHead=document.querySelector('.todo-template .app-title');
  $titleHead.textContent=`일정 관리 (${countDone}/${allTodo})`;
}



////텍스트 검사:아무것도 입력안하거나 스페이스바만 쭉치고 입력했을 때 등록 거절
const testInvaild=(text)=>{
  const isEmpty=true;
  if(text.length===0) return isEmpty;
  else{
    for(const t of text){
      if(t!==' ') isEmpty=false;
    }
  }
  return isEmpty;
}

// 인풋창 잡아오기
const $enterInput=document.getElementById("todo-text");

$enterInput.addEventListener("keydown",e=>
{if(e.key==='Enter') return addEventListener});



const addTodoHandler = (e) => {
  
  if(e.target.tagName==='INPUT'){
    alert(`엔터`);
    inputText = target.value; 
  }else{
    const $textInput = document.getElementById("todo-text");
    inputText=$textInput;

  }

  const inputText = target.value;
  // alert(inputText)
  
  if(testInvaild(inputText)){
    target.classList.add('is-empty');
    target.setAttribute('placeholder','공백입니다. 유효한 문자를 입력해주세요');
    return;
  }
 
  target.classList.remove('is-empty');
 

  // 3. 그럼 서버에 이 데이터를 보내서 저장해야 하는데?
  // -> fetch가 필요하겠다. 저장이니까 POST해야겠다.
  // -> payload를 API 스펙에 맞게 만들어 보내야 함
  const payload = {
    text: inputText,
    done: false,
  };
  fetchTodos(URL, "POST").then((res) => {
    if (res.status === 200||res.status===201) {
      alert("등록 성공!");
    } else {
      alert("등록 실패!");
    }
  });
};

// step2. 할 일 등록 기능
const $addBtn = document.getElementById("add");
$addBtn.addEventListener("click",(e)=>{addTodo(e.target)});

// step3. 할 일 삭제 기능
const deleteTodoHandler = (e) => {
  if (!e.target.matches(".remove span")) return;

  if (!confirm("진짜로 삭제합니까??")) return;

  // 특정 할일을 지우기 위해 클릭한 할일의 id값을 알아야 함
  const id = e.target.closest(".todo-list-item").dataset.id;
  // console.log(id);

  // 서버에 삭제 요청하기
  fetchTodos(`${URL}/${id}`, "DELETE").then((res) => {
    if (res.status === 200) {
      console.log("삭제 성공!");
    } else {
      console.log("삭제 실패!");
    }
  });
};

$todoList.addEventListener("click", deleteTodoHandler);

// step4. 할 일 완료 체크 처리
const checkTodoHandler = (e) => {
  // console.log('체크박스 누름', e.target);

  // 1. 서버에 수정요청 보내서 누른 그 할일의
  //    done을 반대값으로 수정해야 함.
  // 1-1. 현재 체크값인 t, f인지 알아야 반대로바꾸지
  console.log(e.target.checked); // 현재상태지 이전상태가 아니다

  const id = e.target.closest(".todo-list-item").dataset.id;
  fetchTodos(`${URL}/${id}`, "PATCH", {
    done: e.target.checked,
  });
};

$todoList.addEventListener("change", checkTodoHandler);

// 수정모드 진입하는 함수
const enterModifyMode=($undo)=>{
    //클래스의 이름을 변경하여 아이콘 바꾸기
    // -> 클릭한 span 태그 노드를 가져와야함
    $undo.classList.replace('lnr-undo','lnr-checkmark-circle');

    //$undo 근처에있는 span.text가져와야함.

    const $textSpan=$undo.closest('.todo-list-item').querySelector('.text');

    // 교체할 input 생성
    const $modInput=document.createElement('input');
    $modInput.classList.add('modify-input')
    $modInput.setAttribute('type','text');
    $modInput.value=$textSpan.textContent;
    //span을 인풋으로
    const $label=$textSpan.parentNode;
    $label.replaceChild($modInput,$textSpan);



};
const modifyTodo=($checkmark)=>{
    const $li=$checkmark.closest('.todo-list-item');
    const id=$li.dataset.id;
    const newText=$li.querySelector('.modify-input').value;
    fetchTodos(`${URL}/${id}`,'PATCH',{
        text:newText
    });

}

//수정이벤트 처리 핸들러
const modifyTodoHandler=e=>{
    if (e.target.matches('.modify span.lnr-undo')){

        enterModifyMode(e.target);
    }
    else if(e.target.matches('.modify span.lnr-checkmark-circle')){
        modifyTodo(e.target); //서버에 수정요청보내기
    }
}

$todoList.addEventListener("click", modifyTodoHandler);
// $todoList.addEventListener('click', doneEditTodoHandler);
// =========== 앱 실행 =========== //
const init = () => {
  fetchTodos(URL)
    .then((res) => res.json())
    .then((todos) => {
      renderTodos(todos);
    });
};

init();
