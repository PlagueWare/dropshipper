// INCLUDE EXPRESS
var express = require("express");
// EXECUTE EXPRESS
var app = express();
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
    res.render("products");
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
