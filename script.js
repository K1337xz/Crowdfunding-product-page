const closeModal = document.querySelector(".closemodal");
const container = document.querySelector(".container");
const header = document.querySelector("header");
const modalWindow = document.querySelector(".backthis");
const topBtn = document.querySelector(".topbtn");
const inpBambo = document.querySelector("#bambo");
const inpBlack = document.querySelector("#black");
const mahogany = document.querySelector("#mahogany");
const bamboInputs = document.querySelector(".bamboinpmodal");
const blackInputs = document.querySelector(".inpblackmodal");
const mohoganyInputs = document.querySelector(".inpmohagony");

function showModal() {
	modalWindow.style.visibility = "visible";
	header.style.filter = "blur(5px)";
	container.style.filter = "blur(5px)";
}
function closemodalWindow() {
	modalWindow.style.visibility = "hidden";
	header.style.filter = "blur(0px)";
	container.style.filter = "blur(0px)";
}

topBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", closemodalWindow);
