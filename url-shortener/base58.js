var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
var base = alphabet.length;

// base10 ==> base58
function encode (num) {
	 var encoded = '';
	 while (num) {
	 	 var remainder = num % base;
	 	 num = Math.floor( num / base );
	 	 encoded = alphabet[remainder].toString() + encoded;
	 }
	 return encoded;
}

// base58 ==> base10
function decode (str) {
	 var decoded = 0;
	 while (str) {
	 	 var index = alphabet.indexOf(str[0]);
	 	 var power = str.length - 1;
	 	 decoded += index * (Maht.pow(base, power));
	 	 str = str.substring(1);
	 }
	 return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;