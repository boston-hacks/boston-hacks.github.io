console.log("Hello World");

var collapsed = true;
function $(query){
	return document.querySelectorAll(query);
}

function collapse(){
	var el = $(".collapse")[0]
	if (collapsed){
		el.className += " active"
		collapsed = false;
	} else {
		el.className = "collapse"
		collapsed = true;
	}

}