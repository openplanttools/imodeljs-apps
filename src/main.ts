//const {exec} = require('child_process');
import { app, BrowserWindow } from "electron";
let window: BrowserWindow | null;

//var backgroundProcess = exec('npm run startE');
const createWindow = () => {

  window = new BrowserWindow({
   // width: 790,
    height: 460,
    webPreferences:{ //needed if trying to require electron in renderer or app.js
      nodeIntegration:true
    }
  })




  window.webContents.loadURL('file://' + __dirname + '/webresources/index.html')
  //window.loadURL("http://provisionwizard.azurewebsites.net/?view=electron")
  //http://provisionuielectron.azurewebsites.net")//("http://localhost:3000/")
  /*window.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );*/

  window.once("ready-to-show", () =>{ //only show once the loading is all done


    if(window)
       window.show();
  })

  process.on('exit',function(){
    //backgroundProcess.kill();
  });

  window.on('closed', () => {

   console.log("bye bye");
   window = null;
  });



};

app.on("ready", createWindow);


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (window === null) {
    createWindow();
  }
});
