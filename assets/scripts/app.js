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

// function setupNav() {
//     var a = $(".main-nav"),
//         b = $(".sub-nav");
//     $(".nav-toggle").click(function(c) {
//         a.toggleClass("open"), $(".content-wrap").toggleClass("slide-right"), toggleSubNav(a, b), c.preventDefault(), toggleFixedContentWrap(!1)
//     }), $("#subNavToggle").click(function(a) {
//         b.hasClass("open") ? b.removeClass("open") : b.addClass("open"), a.preventDefault(), $(".social-links-wrap").hide().show(0)
//     }), a.click(function(c) {
//         c.target === this && (a.removeClass("open"), $(".content-wrap").removeClass("slide-right"), toggleSubNav(a, b), toggleFixedContentWrap(!1))
//     })
// }