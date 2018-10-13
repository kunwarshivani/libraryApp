//including express
var express = require("express");
var app = express();

//including body parser
var bodyParser = require("body-parser");
//to use body parser
app.use(bodyParser.urlencoded({extended: true}));

//books names
var books = [
     {name: "john oliver", image: "https://pixabay.com/get/ed36b70b21fc1c22d2524518b7444795ea76e5d004b014429cf3c87ba1e4b2_340.jpg"},
     {name: "cody rhodes", image: "https://pixabay.com/get/e833b4062ff5063ed1584d05fb1d4e97e07ee3d21cac104496f9c270a5ebbcbf_340.jpg"},
     {name: "banyy  tax", image: "https://pixabay.com/get/eb34b10e2cf3043ed1584d05fb1d4e97e07ee3d21cac104496f9c270a5ebbcbf_340.jpg"},
      {name: "john oliver", image: "https://pixabay.com/get/ed36b70b21fc1c22d2524518b7444795ea76e5d004b014429cf3c87ba1e4b2_340.jpg"},
     {name: "cody rhodes", image: "https://pixabay.com/get/e833b4062ff5063ed1584d05fb1d4e97e07ee3d21cac104496f9c270a5ebbcbf_340.jpg"},
     {name: "banyy  tax", image: "https://pixabay.com/get/eb34b10e2cf3043ed1584d05fb1d4e97e07ee3d21cac104496f9c270a5ebbcbf_340.jpg"},
      {name: "john oliver", image: "https://pixabay.com/get/ed36b70b21fc1c22d2524518b7444795ea76e5d004b014429cf3c87ba1e4b2_340.jpg"},
     {name: "cody rhodes", image: "https://pixabay.com/get/e833b4062ff5063ed1584d05fb1d4e97e07ee3d21cac104496f9c270a5ebbcbf_340.jpg"},
     {name: "banyy  tax", image: "https://pixabay.com/get/eb34b10e2cf3043ed1584d05fb1d4e97e07ee3d21cac104496f9c270a5ebbcbf_340.jpg"}

];

// for extention ejs
app.set( "view engine" , "ejs" );

//home page
app.get("/", function( req, res ){
	res.render("home");
});

//books listing page
app.get("/books", function( req, res ){
	res.render("books", {books:books});
});

//adding new books
app.post("/books", function( req, res ){
    var name = req.body.name;
    var image = req.body.image;
    var newBook = {name: name, image: image};
    books.push(newBook);
    //redirect
    res.redirect("/books");
});

//form for books
app.get("/books/new", function( req, res ){
	res.render("new");
});

//for login page
app.get("/books/login", function( req, res ){
   res.render("login");
});

//listening to the server
app.listen(3000, function(){
	console.log("library server has started");
});