// 하나의 상품 객체에 대한 설계도
class Product {
  // 객체를 만들 때 초기값을 세팅하는 용도
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}
// 객체 생성
const p1 = new Product(
  "냠냠이",
  "https://blog.kakaocdn.net/dn/cSGF4R/btq5h0PUbMx/9RgR2KxK5oEeT9ku9O2xW1/img.png",
  2000,
  "냠냠박사님 맛있게 밥을 먹어주세요~"
);
// console.log(p1);
const p2 = new Product(
  "쩝쩝이",
  "https://www.animaxtv.co.kr/sites/animaxtv.co.kr/files/ct_character_f_primary_image/nyamnyam.jpg",
  7000,
  "쩝쩝꿀꿀박사님 점심을 추천해주세요~"
);
// console.log(p2);

// 속성 객체를 만드는 클래스
class Attribute {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

// DOM을 생성하는 공통 클래스
class Component {
  // tagId : 부모태그 역할을 할 태그의 id속성값
  constructor(tagId) {
    this.tagId = tagId;
  }
  // 태그를 생성하는 함수
  // classnames = 'box blue circle'
  createElement(
    tagName = "",
    classnames = "",
    childHtml = "",
    attributes = []
  ) {
    const $newTag = document.createElement(tagName);
    if (classnames) $newTag.className = classnames;
    if (attributes && attributes.length > 0) {
      attributes.forEach((attr) => {
        $newTag.setAttribute(attr.name, attr.value);
      });
    }
    if (childHtml) $newTag.innerHTML = childHtml;
    document.getElementById(this.tagId).appendChild($newTag);
    return $newTag;
  }
}

// 화면 가장 상단부에 들어갈 장바구니 총액 정보 태그 생성 클래스
class ShoppingCart extends Component {
  constructor(tagId) {
    super(tagId); //super('app')
    // 장바구니에 담은 Product들을 저장
    this.cartItems = [];
  }

  render() {
    const childHtml = `
      <h2>총액 0원</h2>
      <button>주문하기</button>
    `;
    this.createElement("section", "cart", childHtml, [
      new Attribute("id", "cart-id"),
      new Attribute("title", "add to cart"),
    ]);
  }
}

// 한개의 LI태그를 생성하는 컴포넌트 클래스 설계
class ProductItem extends Component {
  constructor(product, tagId) {
    super(tagId);
    this.product = product;
  }

  // 담기버튼 클릭이벤트 핸들러
  addToCartHandler() {
    console.log("장바구니에 상품을 추가함!");
    // 이 핸들러에서 누른 그 상품의 정보를 알아야 한다.
    console.log(this.product);
  }

  render() {
    const childHtml = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>${this.product.price}원</h3>
        <p>${this.product.description}</p>
        <button>담기</button>
      </div>
    </div>
    `;
    const $prod=this.createElement("li", "product-item", childHtml);
    
    const $addCartBtn = $prod.querySelector("button");
    // $addCartBtn.addEventListener('click', this.addToCartHandler.bind(this));
    $addCartBtn.addEventListener("click", () => this.addToCartHandler());
    return $prod;
  }
}

// 한 개의 UL을 생성하는 클래스
class ProductList extends Component {
  constructor(tagId) {
    super(tagId);
    // 상품들을 모아 놓은 배열
    this.products = [
      p1,
      p2,
      new Product(
        "햄버거",
        "https://images.chosun.com/resizer/5jStJ5InVS4u3iHvEzB8y_tGrr8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HV765ADF7VF4FLG5KISDNFMUJ4.PNG",
        16900,
        "꽈뜨로 맥씨멈 스테카 버거~"
      ),
      new Product(
        "애플워치",
        "https://img.danawa.com/prod_img/500000/535/481/img/15481535_1.jpg?_v=20211215103510",
        400000,
        "APPLE watch 2세대 2022"
      ),
      new Product(
        "애플망고",
        "https://m.thegiboon.com/web/product/big/202104/ea08c22e8939ab1977487abc826b8ab8.jpg",
        60000,
        "맛있는 맹고~ 당장 사먹어야지~"
      ),
    ];
  } // end constructor

  render() {
    this.createElement("ul", "product-list", "", [
      new Attribute("id", "prod-list"),
    ]);

    this.products.forEach((prod) => {
      const productItem = new ProductItem(prod, "prod-list");
      productItem.render();
    });
  }
}

// ShoppingCart와 ProductList를 합쳐서 렌더링처리하는 클래스
class Shop {
  constructor() {
    this.render();
  }

  render() {
    new ShoppingCart("app").render();
    new ProductList("app").render();
  }
}

// 렌더링 명령
new Shop(); //1
