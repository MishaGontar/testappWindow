const path = require("path")
const url = require("url")
const {app, BrowserWindow} = require("electron")

let win

function createWindow() {
    win = new BrowserWindow({
        width: 1920,
        height: 1080,
        icon: __dirname + '/icons/space_dog.png',
        webPreferences: {
            preload: path.join(__dirname, 'loading.html')
        }
    })
    win.loadFile('index.html')
}

app.on("ready", () => createWindow())
app.on("window-all-closed", () => app.quit())