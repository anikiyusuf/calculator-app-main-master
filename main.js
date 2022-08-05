function display(value) {
  document.getElementById("result").value += value;
}

 function clearScreen(){
   document.getElementById("result").value = "";
 }
function calEl(){
   let  p = document.getElementById("result").value;
  let q = eval(p);
   document.getElementById("result").value = q;
}
function delBtn(){
  var inputEl = document.getElementById("result");
  inputEl.value = inputEl.value.substr(0, inputEl.value.length-1);
}




/* THEME */
const redBtn = document.querySelector(".red-btn");
const orangeBtn = document.querySelector(".orange-btn");
const cyanBtn = document.querySelector(".cyan-btn");

/* RED THEME*/

redBtn.addEventListener("click", () => {
  document.body.classList.add("red-theme");
  document.body.classList.remove("orange-theme");
  document.body.classList.remove("cyan-theme");
  redBtn.style.opacity = "1";
  orangeBtn.style.opacity = "0";
  cyanBtn.style.opacity = "0";
   document.body.style.backgroundColor="hsl(222, 26%, 31%)"
  document.getElementById("theme-El").style.color="hsl(180, 100%, 99%)"
    document.getElementById("par").style.color="hsl(180, 100%, 99%)";
   document.getElementById("toggle-button").style.color="hsl(180, 100%, 99%)";
   document.getElementById("toggle-button2").style.color="hsl(180, 100%, 99%)";
   document.getElementById("toggle-button3").style.color="hsl(180, 100%, 99%)";
   document.getElementById("toggle-btn").style.backgroundColor="hsl(225, 31%, 20%)";
   document.getElementById("result").style.backgroundColor = "hsl(224, 35%, 15%)";
   document.getElementById("result").style.color = "hsl(180, 100%, 99%)";
   document.getElementById("numbers").style.backgroundColor = "hsl(224, 35%, 15%)";
  document.getElementById("del-El").style.backgroundColor = "hsl(224, 21%, 50%)";
  document.getElementById("del-El").style.boxShadow= "0 5px 1px hsl(224, 23%, 45%)"
  document.getElementById("reset-El").style.backgroundColor = "hsl(224,21%,50%)";
  document.getElementById("reset-El").style.boxShadow="0 5px 1px hsl(224, 23%, 45%)"
   document.getElementById("cal-El").style.backgroundColor = "hsl(6, 64%, 50%)";
    document.getElementById("cal-El").style.boxShadow="0 5px 1px hsl(5, 66%, 51%)"
   document.getElementById("num-El").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El").style.backgroundColor= "hsl(48, 9%, 89%)";
  document.getElementById("num-El").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)";
  document.getElementById("num-El2").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El2").style.backgroundColor="hsl(48, 9%, 89%)";
  document.getElementById("num-El2").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El3").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El3").style.backgroundColor="hsl(48, 9%, 89%)";
  document.getElementById("num-El3").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)";
  document.getElementById("num-El4").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El4").style.backgroundColor="hsl(48, 9%, 89%)";
  document.getElementById("num-El4").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El5").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El5").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El5").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El6").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El6").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El6").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El7").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El7").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El7").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El8").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El8").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El8").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El9").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El9").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El9").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El10").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El10").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El10").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El11").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El11").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El11").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El12").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El12").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El12").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
    document.getElementById("num-El13").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El13").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El13").style.boxShadow="0 5px 1px hsl(60, 4%,89%)";
    document.getElementById("num-El14").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El14").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El14").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
    document.getElementById("num-El15").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El15").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El15").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
});



/* ORANGE-BTN */
orangeBtn.addEventListener("click", () => {
  document.body.classList.add("orange-theme");
  document.body.classList.remove("red-theme");
  document.body.classList.remove("cyan-theme");
  redBtn.style.opacity = "0";
  orangeBtn.style.opacity = "1";
  cyanBtn.style.opacity = "0";
   document.body.style.backgroundColor=" hsl(0, 0%, 90%)";
   document.getElementById("par").style.color="black";
    document.getElementById("theme-El").style.color="black"
   document.getElementById("toggle-button").style.color="black";
   document.getElementById("toggle-button2").style.color="black";
   document.getElementById("toggle-button3").style.color="black";
   document.getElementById("toggle-btn").style.backgroundColor="hsl(0, 6%, 82%)";
   document.getElementById("result").style.backgroundColor = "hsl(0, 0%, 93%)";
   document.getElementById("result").style.color = "black";
   document.getElementById("numbers").style.backgroundColor = "hsl(0, 5%, 81%)";
   document.getElementById("del-El").style.backgroundColor = "hsl(185, 41%, 37%)";
      document.getElementById("del-El").style.boxShadow = "0 5px 1px hsl(184, 57%, 25%)"
  document.getElementById("reset-El").style.backgroundColor = "hsl(185, 41%, 37%)";
      document.getElementById("reset-El").style.boxShadow = "0 5px 1px hsl(184, 57%, 25%)"
  document.getElementById("cal-El").style.backgroundColor = "hsl(25, 99%, 39%)";
    document.getElementById("cal-El").style.boxShadow = "0 5px 1px hsl(25, 99%, 39%)"
  
   document.getElementById("num-El").style.color="hsl(60, 9%, 21%)";
    
  document.getElementById("num-El").style.backgroundColor= "hsl(48, 9%, 89%)";
  document.getElementById("num-El").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)";
  document.getElementById("num-El2").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El2").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El2").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El3").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El3").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El3").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)";
  document.getElementById("num-El4").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El4").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El4").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El5").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El5").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El5").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El6").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El6").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El6").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El7").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El7").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El7").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El8").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El8").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El8").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El9").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El9").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El9").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El10").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El10").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El10").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El11").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El11").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El11").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
  document.getElementById("num-El12").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El12").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El12").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
    document.getElementById("num-El13").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El13").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El13").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
    document.getElementById("num-El14").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El14").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El14").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
    document.getElementById("num-El15").style.color="hsl(60, 9%, 21%)";
  document.getElementById("num-El15").style.backgroundColor="hsl(48, 9%, 89%)"
  document.getElementById("num-El15").style.boxShadow="0 5px 1px hsl(60, 4%, 89%)"
});








/* CYRAN BTN*/
cyanBtn.addEventListener("click", () => {
  document.body.classList.add("cyan-theme");
  document.body.classList.remove("red-theme");
  document.body.classList.remove("orange-theme");
  redBtn.style.opacity = "0";
  orangeBtn.style.opacity = "0";
  cyanBtn.style.opacity = "1";
   document.body.style.backgroundColor="hsl(268, 75%, 9%)"
    document.getElementById("par").style.color="hsl(53, 100%, 66%)";
    document.getElementById("theme-El").style.color="hsl(53, 100%, 66%)"
   document.getElementById("toggle-button").style.color="hsl(53, 100%, 66%)";
   document.getElementById("toggle-button2").style.color="hsl(53, 100%, 66%)";
   document.getElementById("toggle-button3").style.color="hsl(53, 100%, 66%)";
   document.getElementById("toggle-btn").style.backgroundColor="hsl(269, 74%, 12%)";
   document.getElementById("result").style.backgroundColor = "hsl(269, 74%, 12%)";
   document.getElementById("result").style.color = "hsl(53, 100%, 66%)";
   document.getElementById("numbers").style.backgroundColor = "hsl(269, 74%, 12%)";
   document.getElementById("del-El").style.backgroundColor = "hsl(281, 89%, 26%)";
  document.getElementById("del-El").style.boxShadow= "0 5px 1px hsl(285, 92%, 52%)"
   document.getElementById("reset-El").style.backgroundColor = "hsl(281, 89%, 26%)";
document.getElementById("reset-El").style.boxShadow ="0 5px 1px hsl(285, 92%, 52%)"
   document.getElementById("cal-El").style.backgroundColor = "hsl(176, 100%, 44%)";
   document.getElementById("cal-El").style.boxShadow = "0 5px 1px hsl(176, 91%, 70%)"
  document.getElementById("cal-El").style.color = "hsl(269, 48%, 20%)";
  document.getElementById("num-El").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El").style.backgroundColor= "hsl(269, 48%, 20%)";
  document.getElementById("num-El").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)";
  document.getElementById("num-El2").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El2").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El2").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El3").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El3").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El3").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)";
  document.getElementById("num-El4").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El4").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El4").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El5").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El5").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El5").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El6").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El6").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El6").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El7").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El7").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El7").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El8").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El8").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El8").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El9").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El9").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El9").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El10").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El10").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El10").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El11").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El11").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El11").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  document.getElementById("num-El12").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El12").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El12").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
    document.getElementById("num-El13").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El13").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El13").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
    document.getElementById("num-El14").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El14").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El14").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
    document.getElementById("num-El15").style.color="hsl(54, 100%, 59%)";
  document.getElementById("num-El15").style.backgroundColor="hsl(269, 48%, 20%)"
  document.getElementById("num-El15").style.boxShadow="0 5px 1px hsl(289, 71%, 36%)"
  
});

