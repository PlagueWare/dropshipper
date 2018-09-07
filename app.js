var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/products", function (req, res) {
    res.render("products");
});

app.get("/products/:productID", function (req, res) {
    res.render("products");
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

app.listen(3000, "localhost", function () {
    console.log("Express server started on localhost:3000");
});
