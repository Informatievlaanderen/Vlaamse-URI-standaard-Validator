const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const uriValidator = require('flemish-uri-standard-validator');

const PORT = 3000;

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

router.get('/dereference-check', async function(req,res){
    let URI = req.headers['uri'];
    let derefenceCheck = await new uriValidator.DereferenceCheck(URI).checkURI();
    res.send(JSON.stringify(derefenceCheck));
});

app.use('/', router);
app.use(express.static(__dirname + '/src'));
//app.listen(process.env.port || 3000);
app.listen(PORT);
console.log('Running at port: ' + PORT);
