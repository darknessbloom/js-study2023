const URL = "http://localhost:5000/posts";

// UL 태그
const $postUl = document.querySelector(".posts");

// form 태그
const $addForm = document.querySelector("#new-post form");
// console.log($addForm);

// 모든 요청방식을 처리하는 유틸함수
const fetchData = (method, url, payload, onloadFn) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("content-type", "application/json");

  let payloadJsonData;
  if (payload) payloadJsonData = JSON.stringify(payload);

  xhr.send(payloadJsonData);

  xhr.onload = () => {
    onloadFn(xhr);
  };
};


fetchData("GET", URL, null, (xhr) => {
  const postList = JSON.parse(xhr.response);

  // 템플릿을 가져옴
  const $postTemplate = document.getElementById("single-post");
  // console.log($postTemplate);
  postList.forEach(({ id, title, body }) => {
    // 템플릿태그에서 li태그를 추출
    const $postLi = document.importNode($postTemplate.content, true);
    // console.log($postLi);
    $postLi.querySelector("li").dataset.postId = id;
    $postLi.querySelector("h2").textContent = title;
    $postLi.querySelector("p").textContent = body;

    $postUl.appendChild($postLi);
  });
});

$addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const payload = {
    title: document.getElementById("title").value,
    body: document.getElementById("content").value,
  };
  fetchData('POST', URL, payload, xhr => {
    if (xhr.status === 200 || xhr.status === 201) {
      alert("게시물 등록 성공!");
    } else {
      alert("게시물 등록 실패");
    }
  });
});


// 삭제 클릭하면 벌어질 일들에 대한 함수
const deletePostHandler = (e) => {
  if (!e.target.matches("button")) return;

  // 삭제 클릭 대상 아이디 잡아오기
  console.log("삭제 클릭!");
  const id = e.target.closest(".post-item").dataset.postId;
  fetchData('DELETE', `${URL}/${id}`, null, xhr => {
    if (xhr.status === 200) {
      alert("삭제 성공!");
    } else {
      alert("삭제 실패!");
    }
  });
};

// 삭제 이벤트 등록
$postUl.addEventListener("click", deletePostHandler);
