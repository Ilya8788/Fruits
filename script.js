const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");

btn.addEventListener("click", function (e) {
  //   document.body.classList.add("red");
  console.log(e);
  document.body.classList.toggle("red", true);
  document.body.classList.toggle("blue");
});

reset.addEventListener("click", function (e) {
  console.log(e);
  document.body.classList.add("reset");
});
