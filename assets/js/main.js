$("document").ready(function(){




var background1 = document.getElementsByClassName("background1")[0];
var background2 = document.getElementsByClassName("background2")[0];
var pumpkin = document.getElementsByClassName("pumpkin-logo")[0];
var mediaAmazon2 = document.getElementsByClassName("mediaAmazon2")[0];
var boyContainer = document.getElementsByClassName("boyContainer")[0];
var girlContainer = document.getElementsByClassName("girlContainer")[0];
var container = document.getElementsByClassName("container")[0];
var amazon = document.getElementsByClassName("amazon")[0];
var experience = document.getElementsByClassName("experience")[0];
var okay = document.getElementsByClassName("okay")[0];

// window.onload = function(){
// 	background1.style.animation = "cardFadeIn 8s forwards";
// }

// setTimeout(function(){
// 	background2.style.animation = "cardFadeIn 9s forwards";
// },800)

var tapHere = "<div class='tapHere'>" + 'Tap Here For Our Registry' + "</div>";
mediaAmazon2.innerHTML = tapHere;


TweenMax.staggerFrom(".boy", 0.5, {opacity:0, y:200, delay:0.5}, 0.25);

setTimeout(function(){
	boyContainer.style.animation = "cardFadeOut 1s forwards";
},3500)

setTimeout(function(){
	TweenMax.staggerFrom(".girl", 0.5, {opacity:0, y:200, delay:0.5}, 0.25);
	girlContainer.style.animation = "cardFadeIn 1s forwards";
},3700)

setTimeout(function(){
	girlContainer.style.animation = "cardFadeOut 1s forwards";
},8000)


setTimeout(function(){
	container.style.animation = 'cardFadeIn 1s forwards';
},8500)

setTimeout(function(){
	amazon.classList.add("bounceInUp");
	amazon.style.opacity = "1"
},12000)


experience.addEventListener("click", function(){
	experience.style.animation = "cardFadeOut 1s forwards"
	console.log("hi")
})




if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    var background1 = document.getElementsByClassName("background1")[0];
    background1.style.display = "none"
    
}


if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)){
  var ieBlock = document.getElementsByClassName("ieBlock")[0];
  var body = document.getElementsByClassName("body")[0]
  ieBlock.style.display = "none"
  body.style.backgroundImage = "url('https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/legacy/nameplate/cars/18_mst_segment_landing_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg')"
  alert("This Site Is Not Supported By Internet Explorer. Please Use, Chrome, FireFox Or Edge")
}

































})
