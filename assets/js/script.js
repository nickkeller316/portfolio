var linkedinButton = document.getElementById("linkedin");
var githubButton = document.getElementById("github");
var facebookButton = document.getElementById("facebook");
var aboutButton = document.getElementById("about-btn");


linkedinButton.addEventListener("click", function (event) {
	event.preventDefault();
	window.location.href = "https://www.linkedin.com/in/nick-keller-b010b7195/";
});

githubButton.addEventListener("click", function (event) {
	event.preventDefault();
	window.location.href = "https://github.com/nickkeller316";
});

facebookButton.addEventListener("click", function (event) {
	event.preventDefault();
	window.location.href = "https://www.facebook.com/nick.scheurich.7";
});

aboutButton.addEventListener("click", function (event) {
	event.preventDefault();
	window.location.href = "./about.html";
});


