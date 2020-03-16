const electron = require('electron');
const url = require('url');
const path = require('path');

var unique = require('uniq');

//const BrowserWindow = electron.remote.BrowserWindow
const{app, BrowserWindow, Menu} = electron;

var mainWindow;

//electron listens for an app to be ready
app.on('ready', function(){
    //create a new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    //build menu from template
    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert menu
    // Menu.setApplicationMenu(mainMenu);
});

//create menu template
// const mainMenuTemplate = [
//     {
//         label:'File',
//         submenu:[
//             {
//                 label:'Quit',
//                 accelerator: 'Ctrl+Q',
//                 click(){
//                     app.quit();
//                 }
//             }
//         ]
//     }
// ];



