console.log("Hello World");

var collapsed = true;
function $(query){
	return document.querySelectorAll(query);
}

function collapse(){
	var el = $(".collapse")[0]
	if (collapsed){
		el.className += " active"
		button.innerHTML = "&#x2716;"
		collapsed = false;
	} else {
		el.className = "collapse"
		button.innerHTML ="&#9776;"
		collapsed = true;
	}
}

function faq(selected){
	var els = $(".faq-question");
	for (var i = 0; i <= els.length - 1; i++) {
		els[i].className = "faq-question";
	};
	selected.className += " active";
	console.log(selected);
}
