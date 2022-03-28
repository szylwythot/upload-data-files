const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();

function getFunction(request, response){
  response.sendFile(
    path.join(`${__dirname}/../frontend/index.html`));
}

app.use(fileUpload());

app.get("/", getFunction);
app.use("/pub", express.static(`${__dirname}/../frontend/public`));
app.use("/upload", express.static(`${__dirname}/../frontend/upload`));

console.log("start");

const uploads = path.join(`${__dirname}/../frontend/upload/`);

app.post('/', function(request, response) {
    let picture = request.files.picture;
    // if(picture){
    //     console.dir(picture);
    //     picture.mv(uploads + "profile.jpg");
    // }

    // console.log("start upload");
    // console.log(request.files.picture);

    // response.send('File uploaded!');
    
    // const formData = request.body;
    // formData.image_name / picture.name;
    // let jsonData / 
    // json
    
    let uploadPath;
    if (!request.files || Object.keys(request.files).length === 0) {
      return response.status(400).send('No files were uploaded.');
    }
    // The name of the input field (i.e. "picture") is used to retrieve the uploaded file    
    uploadPath = __dirname + '/../frontend/upload' + picture.name;
  
    // Use the mv() method to place the file somewhere on your server
    picture.mv(uploadPath, function(err) {
      if (err){
          return response.status(500).send(err);
      }
      console.log("file uploaded???");
      response.send('File uploaded!');
    });
  });

const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`
app.listen(port, () => {
    console.log(ipAddress)
});