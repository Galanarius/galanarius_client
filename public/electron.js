const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680, 
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadFile('index.html');
  mainWindow.loadURL('http://localhost:3000');
  
  mainWindow.on('closed', () => mainWindow = null);
}

function loadMenu(){
  const menuTemp = [
    /*{
      label: 'Home',
      click: () => {
        
      }
    },
    {
      label: 'Log in',
      click: () => {
        
      }
    },
    {
      label: 'About',
      click: () => {
        
      }
    },
    {
      label: 'Profile',
      click: () => {
        
      }
    },
    {
      label: 'Map',
      click: () => {
        
      }
    },
    {
      label: 'Actions',
      click: () => {
        
      }
    }*/
  ]
  const menu = electron.Menu.buildFromTemplate(menuTemp);
  electron.Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow).then(loadMenu)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});