window.onload = function(){
let num = Math.round(Math.random() * 9) + 1 

const checkButton = document.getElementById("check")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const fromButton = document.getElementById("from")
const toButton = document.getElementById("to")
const resultText = document.getElementById("result")
const dateInfo = document.getElementById("date")

var today = new Date();
var dstStart = new Date(today.getFullYear(), 2, 14); // Second Sunday in March
var dstEnd = new Date(today.getFullYear(), 10, 7); // First Sunday in November
var isDST = today >= dstStart && today < dstEnd;

var offsetPT = (isDST ? 7 : 8);
var offsetET = (isDST ? -4 : -5);

const timeZones = new Map([
   ["gmt", 0],
   ["utc", 0],
   ["pst", -8],
   ["pdt", -7],
   ["pt", offsetPT],
   ["cst", -6],
   ["cdt", -5],
   ["est", -5],
   ["edt", -4],
   ["et", offsetET]

]);

function clickedCheck() {
   let a = timeZones.get(fromButton.value.toLowerCase());
   let b = timeZones.get(toButton.value.toLowerCase());
   let plus1 = parseInt(num1.value) || 0;
   let plus2 = parseInt(num2.value) || 0;   

   let offset = (-a - plus1) + (b + plus2);

   let selectedDateTime = new Date(dateInfo.value);
   if (isNaN(selectedDateTime) || selectedDateTime === null || selectedDateTime === undefined){
      resultText.innerText = -offset>=0 ? `${fromButton.value}+${plus1} is ahead of ${toButton.value}+${plus2} by ${-offset} hour(s)` : `${fromButton.value}+${plus1} is behind ${toButton.value}+${plus2} by ${offset} hour(s)`

   }else{
      selectedDateTime.setHours(selectedDateTime.getHours() + offset);
      resultText.innerText = "This will be " + selectedDateTime.toLocaleString();
   }
   
 }

 checkButton.onclick = clickedCheck;


}