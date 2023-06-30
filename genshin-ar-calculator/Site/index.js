window.onload = function(){
let num = Math.round(Math.random() * 9) + 1 

const checkButton = document.getElementById("check")
const currentAr = document.getElementById("ar1")
const desiredAr = document.getElementById("ar2")
const currentXp = document.getElementById("xp1")
const desiredXp = document.getElementById("xp2")
const dailyXp = document.getElementById("daily")

const resultText = document.getElementById("result")

const data = [
   0, 375, 875, 1500, 2225, 3075, 4025, 5100, 6300, 7600, 9025, 10550, 12200, 13975, 15850, 17850,
   20225, 22725, 25350, 28125, 30950, 34375, 38100, 42100, 46400, 50975, 55850, 61000, 66450, 72175,
   78200, 84500, 91100, 98000, 105175, 112650, 120400, 128450, 136775, 145400, 155950, 167475,
   179950, 193400, 207800, 223150, 239475, 256750, 275000, 294200, 320600, 349400, 380600, 414200,
   450200, 682550, 941500, 1227250, 1540075, 1880200
 ];

function clickedCheck() {
   var currentArValue = parseInt(currentAr.value)||0;
   var desiredArValue = parseInt(desiredAr.value)||0;
   var currentXpValue = parseInt(currentXp.value)||0;
   var desiredXpValue = parseInt(desiredXp.value)||0;
   var dailyXpValue = parseInt(dailyXp.value)||0;

   if (currentArValue <= 0 || desiredArValue <= 0 || data[currentArValue] + currentXpValue > data[desiredArValue] + desiredXpValue || currentArValue >= 60 || desiredArValue > 60) {
      resultText.innerHTML = "Please enter valid arguments";
    } else {
      var result = Math.ceil(((data[desiredArValue] + desiredXpValue) - (data[currentArValue] + currentXpValue)) / dailyXpValue);
      resultText.innerHTML = `If you gain ${dailyXpValue}xp every day, you will reach your goal in ${result} days.`;
    }

 }

 checkButton.onclick = clickedCheck;


}
