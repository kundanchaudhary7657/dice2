var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6;
randomnumber1= Math.floor(randomnumber1)+1;
var randomimage = "dice"+ randomnumber1 +".png";
var randomimagesource = "images/"+ randomimage;
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomimagesource);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimage1 = "images/dice"+ randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage1);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="rana Randi"
} else if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="dono randi"
}else{
    document.querySelector("h1").innerHTML="gurjot Randi"
}