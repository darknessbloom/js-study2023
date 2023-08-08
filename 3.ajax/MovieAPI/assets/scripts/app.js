//1. 할일 목록 랜더링 true면 체크된 상태로
//2.새로운 할일 추가 -할일 쓰고 더하기 누르면 post요청으로
// 3.할일 삭제- x버튼 누르면 delete dbjson에객체제거 렌더링
//4.할일 체크기능 -체크 박스를 누르면 put,patch db.json에 done 값을 반대값으로 수정
//5. 할일 수정기능- 초록색 버튼을 누르면 수정모드로 진입 인풋창 활성화 인풋창에 새로웅 텍스트를 쓰고 확인 누르면 put patch로 요청이 나가고 db.json에서도 수정

//URL
const URL = "http://localhost:5000/todos";
//todoUL부분
const $todoUl = document.querySelector(".todo-list");

//1.할일 목록 랜더링 true면 체크된 상태로
fetch(URL)
  .then((res) => res.json())
  .then((todoList) => {
    // 템플릿을 가져옴
    const $todoTemplate = document.getElementById("single-todo");
    // console.log(todoList);
    todoList.forEach(({ id, text, done }) => {
      // 템플릿태그에서 li태그를 추출
      const $todoLi = document.importNode($todoTemplate.content, true);
      // console.log($postLi);
      $todoLi.querySelector("li").dataset.dataId = id;
      $todoLi.querySelector(".checkbox .text").textContent = text;

      //체크박스 체크 기능
      $todoCheck = $todoLi.querySelector(".checkbox input");
      console.log($todoCheck);
      if (done) {
        //불완전함 보완하기
        $todoCheck.setAttribute("checked", "");
      }

      $todoUl.appendChild($todoLi);
    });
  });

//2.새로운 할일 추가 -할일 쓰고 더하기 누르면 post요청으로
const $addBtn = document.getElementById("add");
$addBtn.addEventListener("click", (e) => {
  console.log($addBtn);
  e.preventDefault();
  const payload = {
    text: document.getElementById("todo-text").value,
    done: false,
  };

  // fetch로 POST요청 보내는법
  fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
      alert("등록 성공!");
    } else {
      alert("등록 실패!");
    }
  });
});

// 3.할일 삭제- x버튼 누르면 delete dbjson에객체제거 렌더링
// 삭제 클릭하면 벌어질 일들에 대한 함수
const deletePostHandler = (e) => {
  const deleteBtnClass = "lnr lnr-cross-circle";

  if (e.target.className !== deleteBtnClass) {
    return;
  }

  // 삭제 클릭 대상 아이디 잡아오기
  console.log("삭제 클릭!");
  const id = e.target.closest(".todo-list-item").dataset.dataId;
  fetch(`${URL}/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.status === 200) {
      alert("삭제 성공!");
    } else {
      alert("삭제 실패!");
    }
  });
};

// 삭제 이벤트 등록
$todoUl.addEventListener("click", deletePostHandler);

//4.할일 체크기능 -체크 박스를 누르면 put,patch db.json에 done 값을 반대값으로 수정

const fetchPost = (e) => {
  // console.log(e.target.tagName);
  //할일쪽을 누르면 체크박스 수정됨... ->라벨로 묶어놔서...
  if (e.target.tagName !== "INPUT") {
    return;
  }

  const id = e.target.closest(".todo-list-item").dataset.dataId;
  const isChecked = e.target.checked;
  console.log(isChecked);

  e.preventDefault();
  const payload = {
    done: isChecked,
  };
  console.log(id);

  fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.status === 200) {
      alert("체크박스수정 성공!");
    } else {
      alert("수정 실패!");
    }
  });
};

$todoUl.addEventListener("click", fetchPost);

//5. 할일 수정기능- 초록색 버튼을 누르면 수정모드로 진입 인풋창 활성화 인풋창에 새로웅 텍스트를 쓰고 확인 누르면 put patch로 요청이 나가고 db.json에서도 수정
//span이 input으로 바뀌어야하고 //버튼이 체크표시로 바뀌어야함.
const editPostHandler = (e) => {
  if (!e.target.className==='modify')return;

  const id = e.target.closest(".todo-list-item").dataset.dataId;
  const modifying = "lnr lnr-undo";
  const doneEdit = "lnr lnr-checkmark-circle";
  if (e.target.className === modifying) {
    e.target.className = doneEdit;

    const $editLi = e.target.closest(".todo-list-item");
    const $editSpan = $editLi.querySelector(".checkbox .text");
    const $originText = $editSpan.innerText;
    const $newedit = document.createElement("input");
    $newedit.setAttribute("value", $originText);
    $newedit.setAttribute("class", "text");
    $newedit.setAttribute("id", "edit-text");
    console.log($newedit);
    const parentDiv = $editSpan.parentNode;
    parentDiv.replaceChild($newedit, $editSpan);
  }
  else{
    e.target.className=doneEdit;
    const payload = {
        text: document.getElementById("edit-text").value,
      };
    
      // fetch로 POST요청 보내는법
      fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert("수정 성공!");
        } else {
          alert("수정 실패!");
        }
      });

  }

  
};

const $modBtn=document.querySelector('.todo-list-item .modify');

$todoUl.addEventListener("click", editPostHandler);
