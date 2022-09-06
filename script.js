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
const pledgeMohagony = document.querySelector(".pledgeMohagony");
const bamboButton = document.querySelector(".continuebambomodal");
const bamboWin = document.querySelector(".bambo");
const continueBtn = document.querySelectorAll(".continue");
const errBambo = document.querySelector(".errBambo");
const errorBlack = document.querySelector(".errBlack");
const mainthanks = document.querySelector(".mainthanks");
const errMoh = document.querySelector(".erorMoha");
const gotitButton = document.querySelector(".gotIt");
const baboNumTop = document.querySelector(".bamboNumber");
const bamboNumberModal = document.querySelector(".bamboNumberModal");
const totalBackers = document.querySelector(".totalBackers");
const valueBacked = document.querySelector(".valueBacked");
const blackedNumberM = document.querySelector(".blackeditionNumberModal");
const blackedNum = document.querySelector(".blackeditionNumber");
const blackWin = document.querySelector(".blackedition");
const mohagonyNumModal = document.querySelector(".mahoganModalNumber");
const mohagonyNum = document.querySelector(".mahoganyNumber");
const mohoganyWinSpecial = document.querySelector(".mahoganyspecial");
const progress = document.querySelector(".progess");
const bookmarkInput = document.querySelector(".bookmark");
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
	let blackNum = blackedNumberM.textContent;
	let mohNum = mohagonyNumModal.textContent;
	let numTot = parseFloat(totalwithoutcomma) + 1;
	let numberOfTotalBackers = numTot.toString().replace(/.{1}/, "$&,");
	if (inpBambo.checked === true && pledgeBambo.value >= 25) {
		let minusBambo = parseFloat(babmbonum) - 1;
		let totalBacked =
			parseFloat(valuebackedwithoutcomma) + parseFloat(pledgeBambo.value);
		let valueOfTotalBacked = totalBacked.toString().replace(/.{2}/, "$&,");
		baboNumTop.innerHTML = `${minusBambo}`;
		bamboNumberModal.innerHTML = `${minusBambo}`;
		valueBacked.innerHTML = `$${valueOfTotalBacked}`;
		totalBackers.innerHTML = `${numberOfTotalBackers}`;
		let localBambo = {
			totalBackers: numberOfTotalBackers,
			totalBackeds: valueOfTotalBacked,
			bamboNumberModal: minusBambo,
			bamboNumber: minusBambo,
		};
		localStorage.setItem("localBambo", JSON.stringify(localBambo));
		mainthanks.classList.add("mainactiv");
		modalWindow.classList.remove("active");
		modalWindow.style.visibility = "hidden";
		header.style.filter = "blur(5px)";
		container.style.filter = "blur(5px)";
		errBambo.innerText = ``;
		pledgeBambo.classList.remove(`errorInp`);
	} else if (inpBambo.checked === true && pledgeBambo.value < 25) {
		pledgeBambo.classList.add(`errorInp`);
		errBambo.innerText = `The pledge must be greater than or equal to 25`;
	} else if (inpBlack.checked === true && pldedgeBlack.value >= 75) {
		let minusBlack = parseFloat(blackNum) - 1;
		console.log(minusBlack);
		let totalBlack =
			parseFloat(valuebackedwithoutcomma) +
			parseFloat(pldedgeBlack.value);
		let valueTotal = totalBlack.toString().replace(/.{2}/, "$&,");
		blackedNum.innerHTML = `${minusBlack}`;
		blackedNumberM.innerHTML = `${minusBlack}`;
		valueBacked.innerHTML = `$${valueTotal}`;
		totalBackers.innerHTML = `${numberOfTotalBackers}`;
		let localBlack = {
			totalBackers: numberOfTotalBackers,
			totalBackeds: valueTotal,
			bamboNumberModal: minusBlack,
			bamboNumber: minusBlack,
		};
		localStorage.setItem("localBlack", JSON.stringify(localBlack));
		mainthanks.classList.add("mainactiv");
		modalWindow.classList.remove("active");
		modalWindow.style.visibility = "hidden";
		header.style.filter = "blur(5px)";
		container.style.filter = "blur(5px)";
		errorBlack.innerText = ``;
		pldedgeBlack.classList.remove("errorInp");
	} else if (inpBlack.checked === true && pldedgeBlack.value < 75) {
		errorBlack.innerHTML = `The pledge must be greater than or equal to 75`;
		pldedgeBlack.classList.add("errorInp");
	} else if (mahogany.checked === true && pledgeMohagony.value >= 200) {
		let mohText = parseFloat(mohNum) - 1;
		console.log(mohText);
		let totalMoh =
			parseFloat(valuebackedwithoutcomma) +
			parseFloat(pledgeMohagony.value);
		let valueTotMoh = totalMoh.toString().replace(/.{2}/, "$&,");
		let localMoh = {
			totalBackersMoh: numberOfTotalBackers,
			totalBackedsMoh: valueTotMoh,
			bamboNumberModalMoh: mohText,
			bamboNumberMoh: mohText,
		};
		localStorage.setItem("localMoh", JSON.stringify(localMoh));
		mohagonyNum.innerHTML = `${mohText}`;
		mohagonyNumModal.innerHTML = `${mohText}`;
		valueBacked.innerHTML = `$${valueTotMoh}`;
		totalBackers.innerHTML = `${numberOfTotalBackers}`;
		mainthanks.classList.add("mainactiv");
		modalWindow.classList.remove("active");
		modalWindow.style.visibility = "hidden";
		header.style.filter = "blur(5px)";
		container.style.filter = "blur(5px)";
		errMoh.innerText = ``;
		pledgeMohagony.classList.remove("errorInp");
	}
	if (mohagonyNumModal.textContent === `0`) {
		mohoganyWinSpecial.classList.add(`outoff`);
		mahoganyWindow.classList.add(`outoff`);
	} else if (bamboNumberModal.textContent === "0") {
		bamboWin.classList.add(`outoff`);
		bamboWindow.classList.add(`outoff`);
	} else if (blackedNumberM.textContent === "0") {
		blackWin.classList.add(`outoff`);
		blackWindow.classList.add(`outoff`);
	}
}

window.onload = () => {
	let localTakeBa = JSON.parse(localStorage.getItem("localBambo"));
	let localTakeBlack = JSON.parse(localStorage.getItem("localBlack"));
	let localTakeMoh = JSON.parse(localStorage.getItem("localMoh"));
	let getProggres = JSON.parse(localStorage.getItem("progresSub"));
	console.log(getProggres);
	if (localTakeMoh) {
		let localItemMohO = Object.keys(localTakeMoh);

		if (localTakeMoh[localItemMohO[2]] === 0) {
			mohoganyWinSpecial.classList.add(`outoff`);
			mahoganyWindow.classList.add(`outoff`);
		}
	}
	if (localTakeBlack) {
		let localItemsBlackO = Object.keys(localTakeBlack);
		if (localTakeBlack[localItemsBlackO[2]] === 0) {
			blackWin.classList.add(`outoff`);
			blackWindow.classList.add(`outoff`);
		}
	}
	if (localTakeBa) {
		let localItemsBaO = Object.keys(localTakeBa);
		if (localTakeBa[localItemsBaO[2]] === 0) {
			bamboWin.classList.add(`outoff`);
			bamboWindow.classList.add(`outoff`);
		}
	}
	if (!localTakeBa && !localTakeBlack && localTakeMoh) {
		let localItemMoh = Object.keys(localTakeMoh);
		mohagonyNum.innerHTML = `${localTakeMoh[localItemMoh[2]]}`;
		mohagonyNumModal.innerHTML = `${localTakeMoh[localItemMoh[2]]}`;
		valueBacked.innerHTML = `$${localTakeMoh[localItemMoh[1]]}`;
		totalBackers.innerHTML = `${localTakeMoh[localItemMoh[0]]}`;
	}
	if (!localTakeBa && localTakeBlack) {
		let localItemsBlack = Object.keys(localTakeBlack);
		blackedNum.innerHTML = `${localTakeBlack[localItemsBlack[2]]}`;
		blackedNumberM.innerHTML = `${localTakeBlack[localItemsBlack[2]]}`;
		valueBacked.innerHTML = `$${localTakeBlack[localItemsBlack[1]]}`;
		totalBackers.innerHTML = `${localTakeBlack[localItemsBlack[0]]}`;
	} else if (!localTakeBa && !localTakeBlack && localTakeMoh) {
		let localItemMoh = Object.keys(localTakeMoh);
		mohagonyNum.innerHTML = `${localTakeMoh[localItemMoh[2]]}`;
		mohagonyNumModal.innerHTML = `${localTakeMoh[localItemMoh[2]]}`;
		valueBacked.innerHTML = `$${localTakeMoh[localItemMoh[1]]}`;
		totalBackers.innerHTML = `${localTakeMoh[localItemMoh[0]]}`;
	}
	if (localTakeBa) {
		let localItemsBa = Object.keys(localTakeBa);
		baboNumTop.innerHTML = `${localTakeBa[localItemsBa[2]]}`;
		bamboNumberModal.innerHTML = `${localTakeBa[localItemsBa[2]]}`;
		valueBacked.innerHTML = `$${localTakeBa[localItemsBa[1]]}`;
		totalBackers.innerHTML = `${localTakeBa[localItemsBa[0]]}`;
	}

	//items from black

	if (!localTakeBlack) return;
	if (localTakeBlack) {
		let localItemsBlack = Object.keys(localTakeBlack);
		blackedNum.innerHTML = `${localTakeBlack[localItemsBlack[2]]}`;
		blackedNumberM.innerHTML = `${localTakeBlack[localItemsBlack[2]]}`;
		valueBacked.innerHTML = `$${localTakeBlack[localItemsBlack[1]]}`;
		totalBackers.innerHTML = `${localTakeBlack[localItemsBlack[0]]}`;
	}
	if (!localTakeMoh) return;
	if (localTakeMoh) {
		let localItemMoh = Object.keys(localTakeMoh);
		mohagonyNum.innerHTML = `${localTakeMoh[localItemMoh[2]]}`;
		mohagonyNumModal.innerHTML = `${localTakeMoh[localItemMoh[2]]}`;
		valueBacked.innerHTML = `$${localTakeMoh[localItemMoh[1]]}`;
		totalBackers.innerHTML = `${localTakeMoh[localItemMoh[0]]}`;
	}

	if (getProggres) {
		let localItemMohO = Object.keys(getProggres);
		let syb = getProggres + 20;
		if (syb === 750 || syb >= 750) {
			progress.style.width = `750px`;
		}
		progress.style.width = `${syb}px`;
	}
};
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
		mahoganyWindow.style.height = `25vh`;
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

function progresBarr() {
	let sub = progress.offsetWidth + 5;
	localStorage.setItem("progresSub", sub);

	let getProggres = JSON.parse(localStorage.getItem("progresSub"));
	if (getProggres) {
		let localItemMohO = Object.keys(getProggres);
		let syb = getProggres + 10;
		setTimeout(() => (progress.style.width = `${syb}px`), 500);
		console.log(syb);
		if (syb === 750 || syb >= 750) {
			progress.style.width = `750px`;
		}
	}
}
gotitButton.addEventListener("click", () => {
	header.style.filter = "blur(0px)";
	container.style.filter = "blur(0px)";
	mainthanks.classList.remove("mainactiv");
});

gotitButton.addEventListener("click", progresBarr);
valueBacked.addEventListener("change", progresBarr);
topBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", closemodalWindow);
