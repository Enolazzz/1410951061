//install: node js
//install web server package: express >npm install express

var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname+"/Enolazzz"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());


var DB = require("nedb-promises");
var kr1DB = DB.create(__dirname+"/kr1.db");

kr1DB.insert({ 
    id: 1, 
    type: 'section1', 
    name: 'section1', 
    img: 'image/1/IMG_0921.jpg', 
    text: '2024.06.29',
});

//kr1DB.insert({ 
//  id: 2, 
//  type: 'section2', 
//  name: 'section2', 
//  img: 'image/2/IMG_7936.JPG', 
//  text: '2024.06.29' 
//});
//
// kr1DB.insert({ 
//   id: 3, 
//   type: 'section3', 
//   name: 'section3', 
//   img: 'image/1/IMG_8478.jpg', 
//   text: '2024.06.29' 
// });
// kr1DB.insert({ 
//   id: 4, 
//   type: 'section4', 
//   name: 'section4', 
//   img: 'image/1/IMG_4529.jpg', 
//   text: '2024.06.29' 
// });
// kr1DB.insert({ 
//   id: 5, 
//   type: 'section5', 
//   name: 'section5', 
//   img: 'image/1/IMG_4910.jpg', 
//   text: '2024.06.29' 
// });
// kr1DB.insert({ 
//   id: 6, 
//   type: 'section6', 
//   name: 'section6', 
//   img: 'image/1/IMG_5206.jpg', 
//   text: '2024.06.29' 
// });
// kr1DB.insert({ 
//   id: 7, 
//   type: 'section7', 
//   name: 'section7', 
//   img: 'image/1/IMG_5894.jpg', 
//   text: '2024.06.29' 
// });

server.get("/img", (req, res)=>{
    DB
    find
    var Services=[
        {"id":1,"type":"section1","name":"section1","img":"image/1/IMG_0921.jpg","text":"2024.06.29","_id":"UBI9JsKj5UVxO72i"},
        {"id":2,"type":"section2","name":"section2","img":"image/2/IMG_7936.JPG","text":"2024.06.29","_id":"Aa8pdHXSOhIZWvGR"},
        {"id":3,"type":"section3","name":"section3","img":"image/1/IMG_8478.jpg","text":"2024.06.29","_id":"2LOs5Pxrngk0zY8x"},
        {"id":4,"type":"section4","name":"section4","img":"image/1/IMG_4529.jpg","text":"2024.06.29","_id":"9tC0ej0U2MoLSr5M"},
        {"id":5,"type":"section5","name":"section5","img":"image/1/IMG_4910.jpg","text":"2024.06.29","_id":"a2syELUvwm3HTun9"},
        {"id":6,"type":"section6","name":"section6","img":"image/1/IMG_5206.jpg","text":"2024.06.29","_id":"0zpGPVWVPq6pNsWI"},
        {"id":7,"type":"section7","name":"section7","img":"image/1/IMG_5894.jpg","text":"2024.06.29","_id":"UkynSDnGWXUK4IFJ"}

    ];
    res.send(Services)
});

server.get("/Enolazzz", (req,res)=>{
    DB
    kr1DB.find({}).then(results=>{
       if(results != null){
            res.send(results);
       }else{
           res.send("Error!");
       }
     })
    //kr1DB.find({}).sort({"id":1}).then(function(data, err){
    //   if (err){
    // response.end();
    // return;
    // }
    //else{
    //    res.send(data);
    //}
    //console.log(data);
    // });
})

server.listen(90, ()=>{
    console.log("Server is running at port 90."); /* 90通道 */
})
