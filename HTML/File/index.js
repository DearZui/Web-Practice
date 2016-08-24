const fileInput = document.getElementById("fileInput");
fileInput.addEventListener('change', function (event) {
	 let file = fileInput.files[0];
	 console.log(file);
}, false);

function readfileSize (file) {
	 let size = file.size / 1024;
	 const aMultipuls = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	 let fileSizeString = '';
	 for(let i = 0; size > 1; size/1024, i++) {
	 	fileSizeString = size.toFixed(2) + " " + aMultipuls[i];
	 }

	 return fileSizeString;
}