//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname+"/2"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());


var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");

//ProfolioDB.insert([
//    { id: 1, type: 'section1', name: 'section1', img: 'image/1/IMG_0921.jpg' ,text:'安安安安安安'},
//    { id: 2, type: 'section2', name: 'section2', img: 'image/2/IMG_7936.JPG' },
//])
server.get("/strollcontainer", (req, res)=>{
    //DB find
    var Services=[
        { id: 1, type: 'section1', name: 'section1', img: 'image/1/IMG_0921.jpg' ,text:'安安安安安安'},
        { id: 2, type: 'section2', name: 'section2', img: 'image/2/IMG_7936.JPG' ,text:'安安安安安安'},
    ];
    res.send(Services)
});

server.get("/2", (req,res)=>{
    DB
     ProfolioDB.find({}).then(results=>{
       if(results != null){
            res.send(results);
       }else{
           res.send("Error!");
       }
     })
    //ProfolioDB.find({}).sort({"id":1}).then(function(data, err){
    //   if (err){
       //    response.end();
       //    return;
       //}
       //else{
       //       res.send(data);
       //}
       //console.log(data);
     // });
})

server.listen(8080, ()=>{
    console.log("Server is running at port 80.");
})