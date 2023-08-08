//UL
const $postUl = document.querySelector(".posts");

//form태그
const $addForm=document.querySelector('#new-post form');
// console.log($addForm);

//서버에서 게시물들을 가져와서 화면에 렌더링
const fetchGetPosts = () => {
  // 서버와 통신하기
  const xhr = new XMLHttpRequest();
  // console.log(xhr);

  // 통신 정보전달

  /*
 HTTP:method
 =GET:리소스를 조회, 
 -POST: 리소스흫 글횻
 -PUT:리소스를 일괄수정(게스문을 모든 정보를 일부수정)
 -PATCH:리소스를 일부 수정
 _DELETE리소스를 삭제
 */
  // 요청정보초기화
  xhr.open("GET", "http://localhost:5000/posts");

  // 요청보내기
  xhr.send();

  xhr.onload = (e) => {
    // console.log(xhr.response);

    // 서버에서 온 데이터는 js가 아니라 json이다.
    // 따라서 js에서 사용하려면 json을 js로 변환 해야함.
    // json -> js  JSON.parse()
    //  js -> json  JSON.stringify()
    const postList = JSON.parse(xhr.response);
    console.log(postList[0].title);
    postList.forEach(({id,title,body}) => {
      const $postLi = document.createElement("li");
      //li태그에 식별 아이디부여
      $postLi.dataset.postId=id;
      $postLi.classList.add("post-item");
      $postLi.innerHTML = `
        <h2>${title}</h2>
        <p>${body}</p>
        <button>delete</button>
        `;
      $postUl.appendChild($postLi);
    });
  };
};







fetchGetPosts();

const fetchNewPost=(e)=>{
    e.preventDefault();//폼의 새로고침 기능 중단
    // console.log(`폼이 제출됨!`);
    const xhr=new XMLHttpRequest();
    xhr.open('POST','http://localhost:5000/posts');
    const payLoad=JSON.stringify({
        title:document.getElementById('title').value,
        body:document.getElementById('content').value
    });
    xhr.setRequestHeader('content-type','application/json');
    xhr.send(payLoad);

    //응답상황처리
    xhr.onload=e=>{
        if(xhr.status===200||xhr.status===201){
            alert(`게시물 등록성공`);
        }
        else{
            alert(`게시물 등록 실패!`);
        }

    };
}
const fetchDelete=(id)=>{
  const xhr=new XMLHttpRequest();
  xhr.open('DELETE',`http://localhost:5000/posts/${id}`);
  xhr.send();

  //응답처리
  xhr.onload=()=>{
    if(xhr.status===200){
      console.log(`삭제성공`);
    }else{
      alert(`삭제 실패`);
    }
  }

};


//삭제클릭하면 벌어질 일들에대한 함수
const deletePostHandler=e=>{
  // if e.taeget.querySelector('button') !==e.target)
  if(!e.target.matches('button')){
    console.log(`나가기`);
    return;
  }

  //삭제 클릭 대상 아이디 잡아오기
  const id=e.target.closest('li').dataset.postId;
  fetchDelete(id);
}
//삭제 이벤트 등록
$postUl.addEventListener('click',deletePostHandler);



//폼태그에 전송 이벤트 등록
$addForm.addEventListener('submit',fetchNewPost);

document.getElementById('go-link').addEventListener('click',e=>{
    const flag=confirm(`진짜 이동합니까?`);
   if (!flag){
    e.preventDefault();//태그의 기본기능을 없앰.
    //기본기능 a-?링크이동기능
    //checkbox->체크기능
    // form -> 서버에데이터를 주면서 새로고침
   }

})