var background1 = document.getElementsByClassName("background1")[0];
var background2 = document.getElementsByClassName("background2")[0];
var pumpkin = document.getElementsByClassName("pumpkin-logo")[0];
var theWay = document.getElementsByClassName("the-way")[0];
var mediaAmazon2 = document.getElementsByClassName("mediaAmazon2")[0];

window.onload = function(){
	background1.style.animation = "cardFadeIn 1.5s forwards";
}

setTimeout(function(){
	background2.style.animation = "cardFadeIn 1.5s forwards";
},800)

var tapHere = "<div class='tapHere'>" + 'Tap Here For Our Registry' + "</div>";


mediaAmazon2.innerHTML = tapHere;


