//모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById("delete-modal");

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

//영화정보 목록배열
const movies = [];
//------------------ 유틸함수,일반함수 정의------------------------------
const closeAddModsl = () => {
  $backdrop.classList.remove(CLASS_VISIBLE);
  $addMovieModal.classList.remove(CLASS_VISIBLE);
};

//화면에 새로운 영화정보 렌더링 함수
const renderNewMovie = ({title,image,rating}) => {
  const $newMovie = document.createElement("li");
  $newMovie.classList.add("movie-element");
  $newMovie.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5</p>
  </div>`;
  $movieList.appendChild($newMovie);
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
    title: titleValue,
    image: imgUrValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);

  //모달 닫기
  closeAddModsl();

  //화면에 입력한 정보 렌더링하기
  renderNewMovie(newMovie);
};

//add movie 버튼 클릭 이벤트
$addMovieButton.addEventListener("click", showMovieModalHandler);

//backdrop영역 클릭 이벤트 (클릭시 추가 창 닫히게)
$backdrop.addEventListener("click", backdropHandler);

//add movie 모달 취소버튼 이벤트
$cancelAddMovieButton.addEventListener("click", closeMovieModalHandler);

//add movie 모달 추가버튼 이벤트
$confirmAddMovieButton.addEventListener("click", addMovieHandler);
