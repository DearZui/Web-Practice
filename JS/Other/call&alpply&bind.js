/*function a() {
	console.log(this);
}
function b(){};

a.call(b);*/


/*function list() {
	return Array.prototype.slice.call(arguments);
}
list(1,2,3);*/


/*function greet() {
	var reply = [this.name, 'is a', this.role].join(' ');
	console.log(reply);
}

var i = {
	name: 'Chen',
	role: 'FE Engineer'
};

greet.call(i);*/


/*var animals = [
	{species: 'Lion', name: 'King'},
	{species: 'Whale', name: 'Fail'}
];

for(var i = 0; i < animals.length; i++) {
	(function (i) {
		this.print = function() {
			console.log('#' + i + ' ' + this.species + ': ' + this.name);
		}
		this.print();
	}).call(animals[i], i);
}*/


/*var a = {
	name: 'Chen',
	say: function(){
		console.log("Hi, I am");
	}
};
function b(name) {
	console.log("Fathe name: " + name);
	console.log("I am " + this.name);
	this.say();
}
b.call(a,'test')*/



/*Function.prototype.construct = function(aArgs) {
	var fConstructor = this,
		fNewConstr = function() {
			fConstructor.apply(this, aArgs);
		};
	fNewConstr.prototype = fConstructor.prototype;
	return new fNewConstr();
}
function MyConstructor () {
	for(var nProp = 0; nProp < arguments.length; nProp++) {
		console.log(arguments, this);
		this["property" + nProp] = arguments[nProp];
	}
}
var myArray = [4, 'Chen', false];
var myInstance = MyConstructor.construct(myArray);*/