const { app, BrowserWindow } = require('electron');
const path = require('path')

process.env.NODE_ENV = 'production'

function createWindow() {
    
    const win = new BrowserWindow({
        height: 600,
        width: 400,
        minHeight: 500,
        minWidth: 400,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        icon: 'app/assets/img/icon.png',
        title: 'Calculator',
    });

    win.setTitle('Calculator');
    win.loadFile(
        'app/templates/main.html'
    );
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});