//IMPORT AREA

//const something = require ('somelibrary');
const express = require('express');
const multer  = require('multer');
const app = express();

require('dotenv').config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './myuploads')
    },
    filename: function (req, file, cb) {
        
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Math.floor(Math.random() * 100000000)+file.originalname)
    }
  })

const upload = multer({ storage: storage })

//app.method(atchual argument )
app.post('/uploadfile',upload.single('my file'),(req,res)=>{
    console.log(req.file);
    res.status(200).json({
        msg:"file uploaded"
    })
})

let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('listening on port ' + port);
});