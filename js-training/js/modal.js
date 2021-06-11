var modalBtn = window.document.querySelector("#m-open");
var cancelBtn = window.document.querySelector("#cancel");

modalBtn.addEventListener("click", (e) => {
  let modal = document.querySelector(".modal");

  if (modal.classList.contains("hidden")) {
    modal.classList.toggle("hidden");
  }
});

cancelBtn.addEventListener("click", (e) => {
  let modal = document.querySelector(".modal");

  if (modal.classList.contains("hidden") == false) {
    modal.classList.toggle("hidden");
  }
});
