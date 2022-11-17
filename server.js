const express = require('express');
const app = express();
const port = 3210;

//bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, function(){
    console.log(`Server has started at port ${port}`)
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    let name = req.body.catName;
    let age = req.body.catAge;
    res.send(answer(name, age));
});


function answer(catName, catAge){
    let name = catName;
    let age = Number(catAge);
    let humanAge = age*4;
    return `${name} is ${age} in cat years and ${humanAge} in human age.`
}