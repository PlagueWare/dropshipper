// INCLUDE EXPRESS
var express = require("express");
// EXECUTE EXPRESS
var app = express();
// INCLUDE BODY PARSER
var bodyParser = require("body-parser");
// USE BODY PARSER
app.use(bodyParser.urlencoded({extended: true}));
// USE REQUEST
var request = require("request");
// SERVE PUBLIC FOLDER
app.use(express.static("public"));
// ASSUME EJS FILE EXTENSION
app.set("view engine", "ejs");

// ROUTES
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/featuredProduct", function (req, res) {
    res.render("featuredProduct");
});

app.get("/products", function (req, res) {
    var products = [
        {"name": "A Test", "price": "$100.00", "image": "images/placeholder.png"},
        {"name": "B Test", "price": "$100.00", "image": "images/placeholder.png"},
        {"name": "C Test", "price": "$100.00", "image": "images/placeholder.png"},
        {"name": "D Test", "price": "$100.00", "image": "images/placeholder.png"},
        {"name": "E Test", "price": "$100.00", "image": "images/placeholder.png"},
        {"name": "F Test", "price": "$100.00", "image": "images/placeholder.png"},
        {"name": "G Test", "price": "$100.00", "image": "images/placeholder.png"},
        {"name": "H Test", "price": "$100.00", "image": "images/placeholder.png"},       
    ]
    res.render("products", {products:products});
});

app.post("/products", function (req, res) {
    res.render("products");
});

app.get("/products/filter/:searchTerm", function (req, res) {
    var searchTerm = req.body.params("searchTerm");
    res.render("products", {products:products});
});

app.get("/products/:productID", function (req, res) {
    var productID = req.params.productID;
    res.render("product");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/signup", function (req, res) {
    res.render("signup");
});

app.get("/user/:userID", function (req, res) {
    var userID = req.params.userID;
    res.render("user");
});

app.get("/cart", function (req, res) {
    res.render("cart");
});

app.get("*", function (req, res) {
    res.render("notFound");
})

// LISTEN
app.listen(3000, "localhost", function () {
    console.log("Express server started on localhost:3000");
});
