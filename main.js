var s = 0;

function hide(){
  //document.getElementById('mainClick2x').style.visibility = "hidden";
  $("#mainClick2x").fadeOut(666);
  $("#mainClick5x").fadeOut(666);
  $("#mainClick10x").fadeOut(666);
  $("#notification").slideUp(1);
}

function scoreIncrement1(){
  s++;
  console.log(s)
  document.getElementById("scoreId").innerHTML = s;
}

function scoreIncrement2(){
  s+=2;
  console.log(s)
  document.getElementById("scoreId").innerHTML = s;
}

function scoreIncrement5(){
  s+=5;
  console.log(s)
  document.getElementById("scoreId").innerHTML = s;
}

function scoreIncrement10(){
  s+=10;
  console.log(s)
  document.getElementById("scoreId").innerHTML = s;
}

function scoreReset(){
  s = 0
  console.log(s);
  window.location.reload(false);
}

function start(){
  $("#question1").fadeIn(666);
  document.getElementById('startQuizButton').style.visibility = "hidden";
}

function clickValue2(){
  if (s >= 10) {
  $("#mainClick1x").fadeOut(666);
  setTimeout(function(){
    //document.getElementById('mainClick2x').style.visibility = "visible";
    $("#mainClick2x").fadeIn(666);
  }, 1000);
} else {
  notEnoughPoints();
}
}

function clickValue5(){
  if (s >= 50) {
  $("#mainClick2x").fadeOut(666);
  setTimeout(function(){
    //document.getElementById('mainClick2x').style.visibility = "visible";
    $("#mainClick5x").fadeIn(666);
  }, 1000);
} else {
  notEnoughPoints();
}
}

function clickValue10(){
  if (s >= 250) {
  $("#mainClick5x").fadeOut(666);
  setTimeout(function(){
    //document.getElementById('mainClick2x').style.visibility = "visible";
    $("#mainClick10x").fadeIn(666);
  }, 1000);
} else {
  notEnoughPoints();
}
}


function autoClick1(){
  setTimeout(function(){
    scoreIncrement1();
    console.log("Works!");
    autoClick1();
  }, 1000);
}


function autoClick(){
  if (s >= 10) {
    autoClick1();
  } else {
    notEnoughPoints();
  }
}






function notEnoughPoints(){
  document.getElementById('notification').style.top = '100px;';
  $("#notification").slideDown(666);
  setTimeout(function(){
    $("#notification").slideUp(666);
  }, 3000);
}

function check(){
if (s < 10) {
  document.getElementById("scoreShow").insertAdjacentHTML("beforebegin", "<span style='color: rgb(75, 75, 75)'>Du fikk under 10 poeng. Da vil vi anbefale deg å bruke denne undervisningen:");
  document.getElementById('scoreCheckButton').style.visibility = "hidden";
  document.getElementById('link1').style.visibility = "visible";
}
if (s <20 && s > 10) {
  document.getElementById("scoreShow").insertAdjacentHTML("beforebegin", "<span style='color:red'>You scored under 20</span>");
}
}


function one(){
  $("#question1").fadeOut(666);
  setTimeout(function(){
    $("#question2").fadeIn(666);
  }, 1000);
}
