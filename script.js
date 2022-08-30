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
const pledgeBambo = document.querySelector(".pledgeBambo");
const pldedgeBlack = document.querySelector(".pledgeBlack");
const bamboButton = document.querySelector(".continuebambomodal");
const continueBtn = document.querySelectorAll(".continue");
const errBambo = document.querySelector(".errBambo");
const mainthanks = document.querySelector(".mainthanks");
const gotitButton = document.querySelector(".gotIt");
let baboNumTop = document.querySelector(".bamboNumber");
let bamboNumberModal = document.querySelector(".bamboNumberModal");
const totalBackers = document.querySelector(".totalBackers");
const valueBacked = document.querySelector(".valueBacked");
for (let i = 0; i < inp.length; i++) {
	inp[i].addEventListener("click", showModal);
}
for (let y = 0; y < continueBtn.length; y++) {
	continueBtn[y].addEventListener("click", continuePledge);
}

function continuePledge() {
	let totalwithoutcomma = totalBackers.textContent.replace(",", "");
	let valuebackedwithoutcomma = valueBacked.textContent.replace(/\$|,/g, "");
	let babmbonum = baboNumTop.textContent;

	if (inpBambo.checked === true && pledgeBambo.value >= 25) {
		let minusBambo = parseFloat(babmbonum) - 1;
		let numTot = parseFloat(totalwithoutcomma) + 1;
		let value =
			parseFloat(valuebackedwithoutcomma) + parseFloat(pledgeBambo.value);
		let valueResoult = value.toString().replace(/.{2}/, "$&,");
		let resoult = numTot.toString().replace(/.{1}/, "$&,");
		baboNumTop.innerHTML = `${minusBambo}`;
		bamboNumberModal.innerHTML = `${minusBambo}`;
		valueBacked.innerHTML = `$${valueResoult}`;
		totalBackers.innerHTML = `${resoult}`;
		mainthanks.classList.add("mainactiv");
		modalWindow.classList.remove("active");
		modalWindow.style.visibility = "hidden";
		header.style.filter = "blur(5px)";
		container.style.filter = "blur(5px)";
	} else if (inpBambo.checked === true && pledgeBambo.value < 25) {
		pledgeBambo.style.border = `1px solid hsl(0, 100%, 48%)`;
		errBambo.innerText = `The pledge must be greater than or equal to 25`;
	} else if (inpBlack.checked === true && pldedgeBlack.value >= 75) {
		console.log("chuj");
	}
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
		bamboWindow.style.height = `25vh`;
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
		blackWindow.style.height = `25vh`;
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
		blackWindow.style.height = `20vh`;
		mahoganyWindow.style.height = `20vh`;
		bamboWindow.style.height = `25vh`;
		bamboInputs.style.display = `flex`;
		blackInputs.style.display = `none`;
		mohoganyInputs.style.display = `none`;
		lowerNoreward.style.display = `none`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		bamboWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		blackWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		mahoganyWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	} else if (num === "black" && input.checked) {
		errBambo.innerText = ``;
		blackWindow.style.height = `25vh`;
		bamboWindow.style.height = `20vh`;
		mahoganyWindow.style.height = `20vh`;
		bamboInputs.style.display = `none`;
		blackInputs.style.display = `flex`;
		mohoganyInputs.style.display = `none`;
		lowerNoreward.style.display = `none`;
		bamboWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		blackWindow.style.border = `2px solid hsl(176, 50%, 47%)`;
		mahoganyWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
		norewardWindow.style.border = `1px solid hsl(0, 0%, 91%)`;
	} else if (num === `mahogany` && input.checked) {
		mahoganyWindow.style.height = `25vh`;
		bamboWindow.style.height = `20vh`;
		blackWindow.style.height = `20vh`;
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

gotitButton.addEventListener("click", () => {
	header.style.filter = "blur(0px)";
	container.style.filter = "blur(0px)";
	mainthanks.classList.remove("mainactiv");
});
topBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", closemodalWindow);
