let arr = ["apple", "banana", "grapes", "lemon", "orange", "pineApple"];
const fruits = document.querySelector(".fruits");
const map = arr.map((x) => x.concat(".jpg"));
const bottom = document.querySelector(".bottom");
// bottom.setAttribute("style", "height: 80px");
fruits.setAttribute("style", "text-align: center");
bottom.setAttribute("style", "text-align: center");
let h3 = document.createElement("h3");
h3.setAttribute("style", " font-size: 50px;");
bottom.append(h3);

// let new_el = document.createElement("img");

// for (let i = 0; i < arr.length; i++) {
//   fruits.append(document.createElement("img"));
// }

for (let i = 0; i < arr.length; i++) {
  let img = document.createElement("img");
  img.src = `/assets/${map[i]}`;
  img.width = "200";
  img.height = "200";
  img.setAttribute("class", `${arr[i]}`);
  fruits.append(img);
}

const apple = document.querySelector(".apple");
const banana = document.querySelector(".banana");
const grapes = document.querySelector(".grapes");
const lemon = document.querySelector(".lemon");
const orange = document.querySelector(".orange");
const pineApple = document.querySelector(".pineApple");

// const apple = document.querySelector(".apple");

// apple.addEventListener("click", function () {
//   bottom.setAttribute("style", "text-align: center");
//   bottom.textContent = "Apple";
// });

apple.addEventListener("click", function () {
  h3.innerText = arr[0];
});

banana.addEventListener("click", function () {
  h3.innerText = arr[1];
});

grapes.addEventListener("click", function () {
  h3.innerText = arr[2];
});

lemon.addEventListener("click", function () {
  h3.innerText = arr[3];
});

orange.addEventListener("click", function () {
  h3.innerText = arr[4];
});

pineApple.addEventListener("click", function () {
  h3.innerText = arr[5];
});
