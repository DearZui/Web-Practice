const canvas = document.getElementById("canvas");
canvas.addEventListener("mousemove", function(e) {
	let x = getMouse(e).x,
		y = getMouse(e).y;
	alert("x: " + x + " y: " + y);
})


function getMouse (e) {
	e = e || window.event;
	let mouse = {};
	let x, y;
	if(e.pageX || e.pageX) {
	 x = e.pageX;
	 y = e.pageY;
	} else if (e.clientX || e.clientY) {
	 const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	 const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	 x = e.clientX + scrollLeft;
	 y = e.clientY + scrollTop;
	}
	mouse.x = x;
	mouse.y = y;
	return mouse;
}	