const closeModal = document.querySelector(".closemodal");
const container = document.querySelector(".container");
const header = document.querySelector("header");
const modalWindow = document.querySelector(".backthis");
const modal = document.querySelector(".modal");
const topBtn = document.querySelector(".topbtn");
const inpBambo = document.querySelector("#bambo");
const inpBlack = document.querySelector("#black");
const mahogany = document.querySelector("#mahogany");
const bamboWindow = document.querySelector(".bambostand");
const blackWindow = document.querySelector(".blackedit");
const mahoganyWindow = document.querySelector(".mahoganymodal");
const norewardWindow = document.querySelector(".noreward");
const bamboInputs = document.querySelector(".bamboinpmodal");
const blackInputs = document.querySelector(".inpblackmodal");
const mohoganyInputs = document.querySelector(".inpmohagony");
const lowerNoreward = document.querySelector(".lowerno");
const standBlocks = document.querySelector(".standblocks");
const inp = standBlocks.querySelectorAll(`input[type="button"]`);

for (let i = 0; i < inp.length; i++) {
	inp[i].addEventListener("click", showModal);
}

function showModal() {
	let num = this.id;
	if (num === `bambobtn`) {
		setTimeout(
			() =>
				bamboWindow.scrollIntoView({
					behavior: "smooth",
					block: "center",
				}),
			500
		);
		inpBambo.checked = true;
		inpBlack.checked = false;
		mahogany.checked = false;
		bamboInputs.style.display = `flex`;
		blackInputs.style.display = `none`;
		mohoganyInputs.style.display = `none`;
		lowerNoreward.style.display = `none`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		bamboWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		blackWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		mahoganyWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	} else if (num === "blackbtn") {
		setTimeout(
			() =>
				blackWindow.scrollIntoView({
					behavior: "smooth",
					block: "center",
				}),
			500
		);
		inpBlack.checked = true;
		inpBambo.checked = false;
		mahogany.checked = false;
		bamboInputs.style.display = `none`;
		blackInputs.style.display = `flex`;
		mohoganyInputs.style.display = `none`;
		lowerNoreward.style.display = `none`;
		bamboWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		blackWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		mahoganyWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	} else {
		setTimeout(
			() =>
				mahoganyWindow.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
				}),
			500
		);
		mahogany.checked = true;
		inpBlack.checked = false;
		inpBambo.checked = false;
		bamboInputs.style.display = `none`;
		blackInputs.style.display = `none`;
		mohoganyInputs.style.display = `flex`;
		lowerNoreward.style.display = `none`;
		bamboWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		mahoganyWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		blackWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	}
	modalWindow.classList.add("active");
	modalWindow.style.visibility = "visible";
	header.style.filter = "blur(5px)";
	container.style.filter = "blur(5px)";
}
function closemodalWindow() {
	modalWindow.classList.remove("active");
	modalWindow.style.visibility = "hidden";
	header.style.filter = "blur(0px)";
	container.style.filter = "blur(0px)";
}

function openInputs(input) {
	let num = input.id;
	const inputs = modal.querySelectorAll('input[type="checkbox"]');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked == true) {
			inputs[i].checked = false;
		}
	}
	if (input.checked == true) {
		input.checked = false;
	} else {
		input.checked = true;
	}
	if (num === `noreward` && input.checked) {
		lowerNoreward.style.display = `flex`;
		blackInputs.style.display = `none`;
		mohoganyInputs.style.display = `none`;
		bamboInputs.style.display = `none`;
		norewardWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		mahoganyWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		blackWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		bamboWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	} else if (num === "bambo" && input.checked) {
		bamboInputs.style.display = `flex`;
		blackInputs.style.display = `none`;
		mohoganyInputs.style.display = `none`;
		lowerNoreward.style.display = `none`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		bamboWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		blackWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		mahoganyWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	} else if (num === "black" && input.checked) {
		bamboInputs.style.display = `none`;
		blackInputs.style.display = `flex`;
		mohoganyInputs.style.display = `none`;
		lowerNoreward.style.display = `none`;
		bamboWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		blackWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		mahoganyWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	} else if (num === `mahogany` && input.checked) {
		bamboInputs.style.display = `none`;
		blackInputs.style.display = `none`;
		mohoganyInputs.style.display = `flex`;
		lowerNoreward.style.display = `none`;
		bamboWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		mahoganyWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		blackWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	}
}
topBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", closemodalWindow);
