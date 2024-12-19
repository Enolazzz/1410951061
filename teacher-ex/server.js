//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));

var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");

 
// ProfolioDB.insert([
//     { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
//     { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
//     { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
//     { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
//     { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
//     { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
// ])

server.get("/services", (req, res)=>{
    //DB find
    var Services=[
        {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
        {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
    ];
    res.send(Services);
});

server.get("/profolio", (req,res)=>{
      //DB
      ProfolioDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
     

})


server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})