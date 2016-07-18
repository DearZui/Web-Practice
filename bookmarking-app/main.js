const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
	// browser window
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	// render html
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// dereference the mainWindow obj when it's closed
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	if (mainWindow === null) {
		createWindow();
	}
});