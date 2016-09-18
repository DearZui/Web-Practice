function reload() {
	let time = chrome.storage.local.get('time') - 0;

	setInterval(refresh(), 1000*time);
	function refresh() {
		chrome.tabs.reload({
			bypassCache: true
		});
	}
}