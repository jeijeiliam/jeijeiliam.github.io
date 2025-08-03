//target all elements to save to constants
const page0btn = document.querySelector("#page0btn");
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page0 = document.querySelector("#page0");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");

function hideall() { //function to hide all pages
	page0.style.display = "none";
	page1.style.display = "none";
	page2.style.display = "none";
	page3.style.display = "none";

}
/*Listen for clicks on the buttons,*/
page0btn.addEventListener("click", function () {
	hideall();
	page0.style.display = "block";
});
page1btn.addEventListener("click", function () {
	hideall();
	page1.style.display = "block";
});
page2btn.addEventListener("click", function () {
	hideall();
	page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
	hideall();
	page3.style.display = "block";
});
hideall();

const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);

function toggleMenus() { /*open and close menu*/
	//if menuItemsList dont have the class "menuShow", add it, else remove it
	menuItemsList.classList.toggle("menuShow");
	//if menu is showing (has the class “menuShow”)
	if (menuItemsList.classList.contains("menuShow")) {
		hamBtn.innerHTML = "Close Menu";
	} else {
		hamBtn.innerHTML = "Open Menu";
	}
}

window.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.page').forEach(function (page) {
		page.style.display = 'none';
	});
	document.getElementById('page0').style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function () {
	const slider = document.getElementById("imgCompareSlider");
	const overlay = document.getElementById("imgCompareOverlay");
	const divider = document.getElementById("imgCompareDivider");

	function updateCompare() {
		const percent = slider.value;
		overlay.style.width = percent + "%";
		divider.style.left = percent + "%";
	}
	if (slider && overlay && divider) {
		updateCompare();
		slider.addEventListener("input", updateCompare);
		updateCompare();
	}
});

const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");
const popAudio = new Audio("audio/sound.mp3");

if (btnSubmit) {
	btnSubmit.addEventListener("click", CheckAns);
}

function CheckAns() {
	let score = 0;
	const ansArray = ["all", "imperfection", "underexposure"];
	for (let i = 0; i < ansArray.length; i++) {
		CheckOneAns(i + 1, ansArray[i]);
	}
	if (popAudio) {
		popAudio.currentTime = 0; // reset audio
		popAudio.play();
	}
	if (scorebox) {
		scorebox.innerHTML = "score:" + score;
	}

	function CheckOneAns(qNo, CorrAns) {
		const cssSel = "input[name='q" + qNo + "']:checked";
		const qTempElem = document.querySelector(cssSel);
		if (qTempElem && qTempElem.value == CorrAns) score++;
	}
}

const resetBtn = document.querySelector("#resetBtn");
const minigame = document.getElementById("minigame");
function GetRandom(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}
const minigameArea = document.getElementById("minigameArea");

function resizeMinigameArea() {
	if (!minigameArea) return;
	const width = Math.min(window.innerWidth * 0.9, 600);
	const height = Math.min(window.innerHeight * 0.4, 400);
	minigameArea.style.width = width + "px";
	minigameArea.style.height = height + "px";
}

window.addEventListener("resize", resizeMinigameArea);
window.addEventListener("DOMContentLoaded", resizeMinigameArea);

function Moveimage() {
	if (!minigameArea || !minigame) return;
	const areaWidth = minigameArea.clientWidth;
	const areaHeight = minigameArea.clientHeight;
	const imgWidth = minigame.offsetWidth;
	const imgHeight = minigame.offsetHeight;
	const maxLeft = areaWidth - imgWidth;
	const maxTop = areaHeight - imgHeight;
	minigame.style.left = GetRandom(0, maxLeft) + "px";
	minigame.style.top = GetRandom(0, maxTop) + "px";
}
var moveimageItvId = setInterval(Moveimage, 1000);

const scoreBox = document.getElementById("scoreBox");
var score1 = 0;
function imageCatch() {
	score1++;
	scoreBox.innerHTML = "nostaglia gained: " + score1;
	popAudio.play();
}
minigame.addEventListener("click", imageCatch);

// Reset score1 when resetBtn is clicked
if (resetBtn) {
	resetBtn.addEventListener("click", function () {
		score1 = 0;
		scoreBox.innerHTML = "nostaglia gained: " + score1;
	});
}


