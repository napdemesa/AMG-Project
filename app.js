var express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();
    
app.locals.dashboard = require("./dashboard.json");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/simulcasts", function(req, res){
    res.render("simulcasts");
});

app.get("/dubs", function(req, res){
    res.render("dubs");
});

app.get("/exclusives", function(req, res){
    res.render("exclusives");
});

app.get("/recentlyAdded", function(req, res){
    res.render("recentlyAdded");
});

app.get("/trendingNow", function(req, res){
    res.render("trendingNow");
});

app.get("/mostPopular", function(req, res){
    res.render("mostPopular");
});

app.get("/continueWatching", function(req, res){
    res.render("continueWatching");
});

app.get("/myQueue", function(req, res){
    res.render("myQueue");
});

app.get("/myFavorites", function(req, res){
    res.render("myFavorites");
});

app.get("/likeRin", function(req, res){
    res.render("likeRin");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running.");
});