var arr = [];
var num = 100;
function Random() {
	let i = Math.round(Math.random(1, 100) * 100);
	if(num > 0) {
		arr.push(i);
		num --;
		Random()
	}
	return arr;
}