var background1 = document.getElementsByClassName("background1")[0];
var background2 = document.getElementsByClassName("background2")[0];
var pumpkin = document.getElementsByClassName("pumpkin-logo")[0];
var theWay = document.getElementsByClassName("the-way")[0];

window.onload = function(){
	background1.style.animation = "cardFadeIn 2s forwards";
}

setTimeout(function(){
	background2.style.animation = "cardFadeIn 2s forwards";
},750)
setTimeout(function(){
	pumpkin.style.animation = "topDown 1s forwards";
	pumpkin.style.opacity = "1.5";
},1500)
setTimeout(function(){
	theWay.style.animation = "leftRight 1.5s forwards";
	pumpkin.style.opacity = "1.5";
},2000)