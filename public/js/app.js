console.log("Hello World");

var collapsed = true;
function $(query){
	return document.querySelectorAll(query);
}

function collapse(){
	var el = $(".collapse")[0];
	var button = $(".collapse-button")[0];
	if (collapsed){
		el.className += " active"
		button.innerHTML = "&#x2716";
		button.style.color = "#E51F63";
		// button.style.font-size = 30;
		collapsed = false;
	} else {
		el.className = "collapse"
		button.innerHTML = "&#9776;"
		button.style.color = "#E51F63";
		// button.style.font-size = 30;
		collapsed = true;
	}
}
