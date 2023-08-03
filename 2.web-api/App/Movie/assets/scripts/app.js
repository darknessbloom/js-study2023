//모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById("delete-modal");

//영화 삭제 모달 안에 있는 확인 취소버튼
const $cancelDeleteMovieButton =$deleteMovieModal.querySelector(".btn--passive");
const $confirmDeleteMovieButton = $cancelDeleteMovieButton.nextElementSibling;

//영화추가버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

//영화 추가 모달안에 있는 확인 취소 버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

// 영화 추가 모달 안에 있는 입력 엘리먼트들
const $userInputs = [...$addMovieModal.querySelectorAll("input")];

const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById("entry-text");

//영화목록 ul태그
const $movieList = document.getElementById("movie-list");

const CLASS_VISIBLE = "visible";

//나의 개인 저장공간
const $entryText=document.getElementById('entry-text');
const $main=document.querySelector('main');
//영화정보 목록배열
const movies = [];

//삭제할 영화 정보 목록 정보
const deleteMovieInfo={
    movieId:'',
    deleteMoviePosition:''
};

//------------------ 유틸함수,일반함수 정의------------------------------
//movie의 자료가 하나라도 있으면 $entryText 없애고 그렇지 않으면 다시 띄우기
const blindEntryText=()=>{
    if (movies.length!==0){
        $entryText.remove();
    }
    else{
        $main.appendChild($entryText);
        
    }
}


const closeAddModsl = () => {
  $backdrop.classList.remove(CLASS_VISIBLE);
  $addMovieModal.classList.remove(CLASS_VISIBLE);
};

const closeDeleteModal = () => {
  $backdrop.classList.remove(CLASS_VISIBLE);
  $deleteMovieModal.classList.remove(CLASS_VISIBLE);
};

// li누루면 삭제모달 버튼 띄우기 ->
const showDeleteModalHandler = (e) => {
  console.log("삭제모달 띄움");
  $deleteMovieModal.classList.add(CLASS_VISIBLE);
  $backdrop.classList.add(CLASS_VISIBLE);
//   console.log(deleteMovieInfo.deleteMoviePosition);
  deleteMovieInfo.deleteMoviePosition = e.target.closest(".movie-element");
  deleteMovieInfo.movieId = deleteMovieInfo.deleteMoviePosition.dataset.movieId;


  //배열에서 해당 아이디 값을 가지는 객체를 찾아내고 인덱스 알아내기
  // let index=-1;
  // for(let i=0;i<movies.length;i++){
  //     if(movies[i].id===movieId){
  //         index=i;
  //         break;
  //     }

  // }
};
const deleteMovieHandler = (e) => {
  console.log("삭제 버튼 눌림");

  //클릭한 태그의  근처 movie-id 값 가져오기
  //대상의 인덱스 찾기
  //indexod:원시타입(숫자, 문자열) 만 찾을 수 있음
  //findIndex():배열 고차함수
  const index = movies.findIndex((m) => m.id === deleteMovieInfo.movieId);

  console.log(`클릭대상 인덱스 ${index}`);

  //그 객체를 배열에서 지우기-> 인덱스를 알아야
  movies.splice(index, 1);
  deleteMovieInfo.deleteMoviePosition.remove();
  blindEntryText();
  closeDeleteModal();
};

//화면에 새로운 영화정보 렌더링 함수
const renderNewMovie = ({ id, title, image, rating }) => {
  const $newMovie = document.createElement("li");
  $newMovie.classList.add("movie-element");
  $newMovie.dataset.movieId = id;
  $newMovie.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5</p>
    </div>`;
  //삭제창을 보여주는 핸들러

  $movieList.appendChild($newMovie);
  //삭제 클릭 이벤트 걸기
  $newMovie.addEventListener("click", showDeleteModalHandler);
  ///Yes버튼 누르면 삭제가 진행되게 하는
  $confirmDeleteMovieButton.addEventListener("click", deleteMovieHandler);
};

//영화 정보 입력란 검증
const validateMovieInput = ({ title, image, rating }) => {
  if (
    title.trim() === "" ||
    image.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    return false;
  }
  return true;
};

// <-------------------이벤트 핸들러 및 이벤트 바인딩----------------------->
//모든 인풋을 리셋하는 함수
const clearMovieModalInput = () => {
  $userInputs.forEach(($input) => ($input.value = ""));
};
//영화 추가 모달 창띄우는 핸들러
const showMovieModalHandler = (e) => {
  $addMovieModal.classList.add("visible");
  $backdrop.classList.add("visible");
  clearMovieModalInput();
};

//백드롭 영역 클릭시 모달이 닫히는 핸들러
const backdropHandler = (e) => {
  closeAddModsl();
};

// 영화 추가모달 창의 취소버튼을 누르면 모달이 닫히는 핸들러
const closeMovieModalHandler = (e) => {
  closeAddModsl();
};

//영화  추가버튼 기능 핸들러
const addMovieHandler = (e) => {
  const titleValue = $titleInput.value; //제목
  const imgUrValue = $imgUrlInput.value; //이미지 경로
  const ratingValue = $ratingInput.value; //평점입력값

  //객체로 묶기
  const newMovie = {
    // 데이터 식별위해 id 추가
    id: Math.random().toString(),
    title: titleValue,
    image: imgUrValue,
    rating: ratingValue,
  };

  //검증
  if (!validateMovieInput(newMovie)) {
    alert("입력값이 유효하지 않습니다.");
    return;
  }

  movies.push(newMovie);
  console.log(movies);
  //모달 닫기
  blindEntryText();
  closeAddModsl();

  //화면에 입력한 정보 렌더링하기
  renderNewMovie(newMovie);
};
//삭제 모달의 취소버튼
const deleteCancelMovieModalHandler = (e) => {
    console.log('취소버튼 눌림');
    closeDeleteModal();
};

//add movie 버튼 클릭 이벤트
$addMovieButton.addEventListener("click", showMovieModalHandler);

//backdrop영역 클릭 이벤트 (클릭시 추가 창 닫히게)
$backdrop.addEventListener("click", backdropHandler);

//add movie 모달 취소버튼 이벤트
$cancelAddMovieButton.addEventListener("click", closeMovieModalHandler);

//add movie 모달 추가버튼 이벤트
$confirmAddMovieButton.addEventListener("click", addMovieHandler);

//delete movie 모달 취소버튼
$cancelDeleteMovieButton.addEventListener('click',deleteCancelMovieModalHandler);