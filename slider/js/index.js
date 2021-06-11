const imageBox = document.querySelectorAll(".image-box");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function clickImage(e) {
  console.dir(this.children[0]);
}

function linkClickImageFunction(e) {
  e.addEventListener("click", clickImage);
}
Array.from(imageBox).forEach(linkClickImageFunction);
// Array.prototype.forEach.call(imageBox, linkClickImageFunction);

leftArrow.addEventListener("click", (e) => {});
rightArrow.addEventListener("click", (e) => {});
