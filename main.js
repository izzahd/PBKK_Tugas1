const electron = require('electron');
const app = electron.app;

const path = require('path');
const url = require('url');

const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready',function(){
	mainWindow = new BrowserWindow({show: false, backgroundColor: '#ffffff'});
	mainWindow.maximize();

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'biodata.html'),
		protocol: 'file:',
		slashes: true
	}));

});

app.on('window-all-closed', function(){
	app.quit();
});