const a = null;
const b = {};
const c = [];

function isArray_typeof(para) {
	console.log(typeof(para));
	/*
		a ==> Object
		b ==> Object
		c ==> Object
		Won't work
	*/
}

function isArray_instanceof(para) {
	console.log(para instanceof Array);
	/*
		a ==> false
		b ==> false
		c ==> true
		distinguish Array and Object
	*/
}

function isArray_constructor(para) {
	console.log(para.constructor == Array)
	// a ==> true
	para.constructor = Object;
	console.log(para.constructor == Array)
	// a ==> fale
	// Not so good
}

function isArray_toString(para) {
	Object.prototype.toString.call(para);
	Object.prototype.toString.apply(para);
	/*
		a ==> [object Null]
		b ==> [object Array]
		c ==> [object Object]
		will do
	*/
}

function isArray_isArray(para) {
	Array.isArray(para);
	/*
		a ==> false
		b ==> true
		c ==> false
		THE BEST!
	*/
}