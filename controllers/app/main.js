const electron = require('electron')
const app = require('electron').app
const path = require('path')
const ipc = electron.ipcRenderer
const axios = require('axios')
const remote = require('electron').remote
const api = require('../../assets/data/api')
const BrowserWindow = electron.remote.BrowserWindow



var btnClose = document.getElementById('close');

btnClose.addEventListener('click', function() {
    var win = remote.getCurrentWindow();
    win.close();
});
  