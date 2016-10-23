function toBinaryString(x) {
	let x_native = x.toString(2);//native method
	let s = "";
	for(let n = x; n > 0; n = parseInt(n/2)) {
		s = (n % 2) + s;
	}
	console.log(x_native);
	console.log(s);
}