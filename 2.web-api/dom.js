{
  /* <nav class="gnb" id="global-nav">
    <ul class="list-item">
        <li class="list-item_food" title="korean">제육볶음</li>
        <li class="list-item_food" title="western">까르보나라</li>
        <li class="list-item_food" title="japanese">스시</li>
    </ul>
</nav> */
}

nav1 = {
  tagName: "nav",
  attributes: {
    id: "global-nav",
    class: ["gnb"],
  },
  classList: ["gnb"],
  parentNode: body,
  children:[ul1]
};
ul1 = {
  tagName: "UL",
  attributes: {
    class: ["list-item"],
  },
  classList: ["list-item"],
  parentNode: nav1,
  children:[li1,li2,li3]
};
li1 = {
  tagName: "LI",
  attributes: {
    class: ["list-item_food"],
    title: "korean",
    nextElementsibling:li2,
    
  },
  classList: ["list-item"],
  textcontent: "제윢볶음",
  parentNode: ul1,
  nextElementsibling:li2,
};
li2 = {
  tagName: "LI",
  attributes: {
    class: ["list-item_food"],
    title: "western",
    
  },
  classList: ["list-item"],
  textcontent: "까르보나라",
  parentNode: ul1,
  nextElementsibling:li3,
};
li3 = {
  tagName: "LI",
  attributes: {
    class: ["list-item_food"],
    title: "japanese",
  },
  classList: ["list-item"],
  textcontent: "스시",
  parentNode: ul1,
};
