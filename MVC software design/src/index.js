const express = require('express');
const { adminRoute } = require('./routes/admin/adminRoute');
const app = express()
require('dotenv').config();
app.use(express.json());


app.use('/admin',adminRoute)

let port = process.env.PORT

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})