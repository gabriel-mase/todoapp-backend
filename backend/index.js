const express = require('express');
const app = express();
require("./functions/database")
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-type, Accept");
    next();
})
app.use(express.json())
app.use('/api', require('./routes/router'));
app.listen(4000, () => console.log("listening on port 4000"));