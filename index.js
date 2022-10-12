const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const apiData = require('./data.json');

const PORT  = process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send('hi from server')
});


app.get('/data',(req,res)=>{
    res.send(apiData);
});

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
});