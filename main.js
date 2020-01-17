
const { app, BrowserWindow } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    let win = new BrowserWindow({
        width: 600,
        height: 600,
        resizable: false,
        icon: 'tic.jpg',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('test.html')
}

app.on('ready', createWindow)