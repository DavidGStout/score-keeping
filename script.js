var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById('p2');
var h1 = document.querySelector("h1");
var p1Score = 0;

p1Button.addEventListener("click", function (){
	p1Score++;
	h1.textContent = p1Score;
	});
