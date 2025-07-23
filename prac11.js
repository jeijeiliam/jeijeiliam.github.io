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
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page0btn.addEventListener("click", function () {
    hideall();
    page0.style.display = "block";
})
page1btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page1.style.display = "block";
});
page2btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page3.style.display = "block";
});
hideall(); //call hideall function to hide all page

/*JS for hamMenu */
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);
function toggleMenus() { /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Open Menu"; //change button text open menu
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('page0').style.display = 'flex';
});

// Add to prac11.js
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("imgCompareSlider");
    const overlay = document.getElementById("imgCompareOverlay");
    const divider = document.getElementById("imgCompareDivider");
    if (slider && overlay && divider) {
        function updateCompare() {
            const percent = slider.value;
            overlay.style.width = percent + "%";
            divider.style.left = percent + "%";
        }
        slider.addEventListener("input", updateCompare);
        updateCompare(); // Set initial position
    }
});

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, q3, score = 0;
function CheckAns() {
    score = 0;
    ansArray = ["all", "imperfection", "underexposure"];
    for (let i = 0; i < ansArray.length; i++) {
        CheckOneAns(i + 1, ansArray[i]);
    }
    scorebox.innerHTML = "score:" + score;
}
function CheckOneAns(qNo, CorrAns) {
    cssSel = "input[name='q" + qNo + "']:checked";
    qTemp = document.querySelector(cssSel).value;
    console.log(qTemp);
    if (qTemp == CorrAns) score++;
}