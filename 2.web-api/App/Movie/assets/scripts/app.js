
//모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById('delete-modal');

//영화추가버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

//영화 추가 모달안에 있는 확인 취소 버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

// 영화 추가 모달 안에 있는 입력 엘리먼트들
const $userInputs = [
  ...$addMovieModal.querySelectorAll("input"),
];

const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');
const CLASS_VISIBLE='visible';

// <-------------------이벤트 핸들러 및 이벤트 바인딩----------------------->

//영화 추가 모달 창띄위는 핸들거
const showMovieModalHandler=e=>{
    $addMovieModal.classList.add('visible');
    $backdrop.classList.add('visible');

}


//add movie 버튼 클릭 이벤트
$addMovieButton.addEventListener('click',showMovieModalHandler);