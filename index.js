var x1=Math.floor(Math.random()*6 +1);
var x2=Math.floor(Math.random()*6 +1);
console.log(x1);
console.log(x2);
var img1src="images/dice"+x1+".png";
var img2src="images/dice"+x2+".png";

document.querySelector("img.img1").setAttribute("src",img1src);
document.querySelector("img.img2").setAttribute("src",img2src);

var text=document.querySelector(".container h1");

if(x1>x2){
    text.innerHTML="1wins";
}
else if(x2>x1){
    text.innerHTML="2wins";
}
else{
    text.innerHTML="DRAW";
}