const { app, BrowserWindow, Menu } = require('electron');
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 420,
        minHeight: 500,
        minWidth: 420,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            devTools: true,
        },
        icon: 'assets/png/icon.png',
        title: 'Calculator',
    });

    win.setTitle('Calculator');
    win.loadFile(
        'app/templates/main.html'
    );
    const menu = Menu.buildFromTemplate(MenuTemplate)
    Menu.setApplicationMenu(menu)
}

const MenuTemplate = [
]

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