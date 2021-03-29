const port = 3000

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('src/client/views'))

const server = app.listen(port, ()=>{console.log(`app running at port : ${port}`)})
 app.get('/',(req,res)=>{
     res.sendFile('views/index.html')
 })