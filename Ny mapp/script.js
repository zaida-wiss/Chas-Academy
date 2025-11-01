

function initializeApp() {
	console.log("App initialized");

}

function move(element) {
	console.log("Move function called");
	element.style.left = "200px";

	let theGreen = document.getElementById("the_green_one");
	theGreen.style.backgroundColor = "blue";
}
