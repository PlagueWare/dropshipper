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

var products = [
    {id: "1", name: "A Test", price: "$100.00", image: "images/box.jpg"},
    {id: "2", name: "B Test", price: "$100.00", image: "images/box.jpg"},
    {id: "3", name: "C Test", price: "$100.00", image: "images/box.jpg"},
    {id: "4", name: "D Test", price: "$100.00", image: "images/box.jpg"},
    {id: "5", name: "E Test", price: "$100.00", image: "images/box.jpg"},
    {id: "6", name: "F Test", price: "$100.00", image: "images/box.jpg"},
    {id: "7", name: "G Test", price: "$100.00", image: "images/box.jpg"},
    {id: "8", name: "H Test", price: "$100.00", image: "images/box.jpg"},       
]

var categories = [
    {name: "All Products"},
    {name: "Category A"},
    {name: "Category B"},
    {name: "Category C"},
    {name: "Category D"},
    {name: "Category E"},
    {name: "Category F"},
    {name: "Category G"}
]

var users = [
    {name: "Robert Ware", email: "plaguemachine@live.com", passwword: "rware952477", type: "admin"}
]

// ROUTES

app.get("/", function (req, res) {
    res.render("home");
});

// PRODUCTS
app.get("/featuredProduct", function (req, res) {
    res.render("featuredProduct");
});

app.get("/products", function (req, res) {
    res.render("products", {products: products, categories: categories});
});

// PRODUCT
app.get("/product", function (req, res) {
    res.render("product");
});

// LOGIN
app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/login", function (req, res) {
    res.render("login");
});

// SIGN UP
app.get("/signup", function (req, res) {
    res.render("signup");
});

app.post("/signup", function (req, res) {
    var nameField = req.body.nameField;
    var emailField = req.body.emailField;
    var pwField = req.body.pwField;
    var pwcField = req.body.pwcField;
    if (pwcField == pwField){
        var newUser = {name: nameField, email: emailField, password: pwField, type: "user"};
        users.push(newUser);
        console.log(users);
        res.render("login");
    }
});

// CART
app.get("/cart", function (req, res) {
    res.render("cart");
});

// CATCH ALL BAD ROUTES
app.get("*", function (req, res) {
    res.render("notFound");
})

// LISTEN
app.listen(3000, "localhost", function () {
    console.log("Express server started on localhost:3000");
});
