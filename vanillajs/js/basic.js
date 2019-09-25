const modal = document.querySelector(".modal");
const openButton = document.getElementById("openbtn");
const openModal = () => {
    console.log(modal.classList);
    modal.classList.remove("hidden");
}
openButton.addEventListener("click", openModal);
const closeButton = document.getElementById("closebtn");
const closeModal = () => {
    modal.classList.add("hidden");
}
closeButton.addEventListener("click", closeModal);
