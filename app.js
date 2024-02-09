const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BANARASI",
    price: 2119,
    colors: [
      {
        code: "black",
        img: "./img/BANAARSI.png",
      },
      {
        code: "darkblue",
        img: "./img/-banarsi.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "PURE SILK",
    price: 3149,
    colors: [
      {
        code: "lightgray",
        img: "./img/PURESILK.png",
      },
      {
        code: "green",
        img: "./img/puresilk2.png",
      },
    ],
  },
  {
    id: 3,
    title: "DHAKA",
    price: 5109,
    colors: [
      {
        code: "lightgray",
        img: "./img/Dhaka1.png",
      },
      {
        code: "green",
        img: "./img/Dhaka2.png",
      },
    ],
  },
  {
    id: 4,
    title: "CHIFFON",
    price: 1129,
    colors: [
      {
        code: "black",
        img: "./img/chiffon1.jpg",
      },
      {
        code: "pink",
        img: "./img/c1.png",
      },
     
    ],
  },
  {
    id: 5,
    title: "KANJIVARM SILK",
    price: 9999,
    colors: [
      {
        code: "gray",
        img: "./img/Kanjivaram.png",
      },
      {
        code: "black",
        img: "./img/k1.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
