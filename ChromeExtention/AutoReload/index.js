const time_select = document.getElementById("time_select");
const btn_submit = document.getElementById("submit");
let ext = chrome.extension.getBackgroundPage();

time_select.onchange = function() {
	time_input.value = time_select.value;
}

btn_submit.onclick = function() {
	let time_input = document.getElementById("time_input");
	let time = time_input.value - 0;
	chrome.storage.local.set({'time': time});
}