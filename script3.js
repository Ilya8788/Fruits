const arr = ["apple", "banana", "grapes", "lemon", "orange", "pineApple"];
const fruits = document.querySelector(".fruits");
const map = arr.map((x) => x.concat(".jpg"));
const bottom = document.querySelector(".bottom");
bottom.setAttribute("style", "height: 80px");
fruits.setAttribute("style", "text-align: center");

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

apple.addEventListener("click", function () {
  bottom.setAttribute("style");
  bottom.textContent = "Apple";
});
