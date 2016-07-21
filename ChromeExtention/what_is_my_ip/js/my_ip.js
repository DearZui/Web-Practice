function httpRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onredaystatechange = function() {
		if (xhr.readyState == 4) {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}

httpRequest('http://ip.chinaz.com/getip.aspx', function(ip) {
	document.getElementById('ip_div').innerText = ip;
});