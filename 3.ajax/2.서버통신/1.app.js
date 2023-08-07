//UL
const $postUl=document.querySelector('.posts');

// 서버와 통신하기
const xhr= new XMLHttpRequest();
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
xhr.open('GET' ,'http://localhost:5000/posts');

// 요청보내기
xhr.send();

xhr.onload= e=>{
    // console.log(xhr.response);

    // 서버에서 온 데이터는 js가 아니라 json이다.
    // 따라서 js에서 사용하려면 json을 js로 변환 해야함.
    // json -> js  JSON.parse()
    //  js -> json  JSON.stringify()
    const postList=JSON.parse( xhr.response);
    console.log(postList[0].title);
    postList.forEach(post => {
        const $postLi=document.createElement('li');
        $postLi.classList.add('post-item');
        $postLi.innerHTML=`
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button>delete</button>
        `;
        $postUl.appendChild($postLi);
        
    });
};


