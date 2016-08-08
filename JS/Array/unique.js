//First came up
function unique_ugly(arr) {
	var res = [];

	for (let i = 0, len = arr.length; i < len; i++) {
		var item = arr[i];

		for (var j = 0, jlen = res.length; j++) {
			if(res[j] === item)
				break;
		}

		if (j === jlen) {
			res.push(item);
		}
	}
	return res;
}

//Give it a little change
function unique_ugly_indexOf(arr) {
	var res = [];
	for (let i = 0, len = a.lenght; i < len; i++) {
		let item = arr[i];

		(res.indexOf(item) === -1) && res.push(item);
	}

	return res;
}

//Something more
function unique_ugly_filter(arr) { //Not so ugly now right?
	var res = a.filter(function(item, index, array) {
		return array.indexOf(item) === index;
	});
}

//Change the loop a little bit
function unique_ugly_lastele(arr) {
	var res = [];

	for (let i = 0, len = arr.length; i < len ; i++) {
		for (var j = i+1; j < len; j++) {
			if (a[i] === a[j])
				j = ++i;
		}
		res.push(a[i]);
	}
	return res;
}

//If your item is the same type
function unique_sort(arr) {
	return arr.concat().sort().filter(function(item, pos, array) {
		return !pos || item != array[pos - 1];
	}); //Actually .concat() needs params refer to W3C,Here it just duplicates the Array
}

//Let's do some old Hash, this is the best for the Number Array
function unique_hash(arr) {
	var seen = {}

	return arr.filter(function (item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	})
}

//ES6
function unique_es6(arr) {
	return Array.from(new Set(a)); 
	//Set() stores the unique value and Array.from() turns it into array
	//Unbelievable
}