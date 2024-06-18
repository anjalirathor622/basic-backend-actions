console.log("its working")

const { application } = require('express');
//Import area

const express = require('express');
const { adminroute } = require('./routes/admin/adminroute');
const { custmerroute } = require('./routes/custmer/custmerroute');
const { deliveryroute } = require('./routes/delivery/deliveryroute');
const { restaurentrout } = require('./routes/restuarent/restaurentrout');

const app = express();
app.use(express.json());

require('dotenv').config();

app.use('/admin',adminroute);
app.use('/delivery',deliveryroute);
app.use('/custmer',custmerroute);
app.use('/restaurent',restaurentrout);




let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("listening on port",port)
})
