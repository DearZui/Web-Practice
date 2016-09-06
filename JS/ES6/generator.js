//yield
function* gen(){
	for (let i = 0; i < 3; i++) {
		yield i;
	}
}

let f = gen()

console.log(f.next().value)

/*//yield + callback
function* tasker(cb){
	const author = yield getAuthor(cb)
}*/