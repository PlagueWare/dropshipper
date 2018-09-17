// INCLUDES
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    request     = require("request"),
    mongoose    = require ("mongoose");

// CONNECT TO MONGODB ATLAS CLUSTER
mongoose.connect("mongodb+srv://plagueware:Rware952477.@cluster0-mazmq.mongodb.net/users?retryWrites=true", {useNewUrlParser:true});
mongoose.connect("mongodb+srv://plagueware:Rware952477.@cluster0-mazmq.mongodb.net/products?retryWrites=true", {useNewUrlParser:true});
mongoose.connect("mongodb+srv://plagueware:Rware952477.@cluster0-mazmq.mongodb.net/categories?retryWrites=true", {useNewUrlParser:true});

// MONGODB SCHEMAS
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, 
    type: String
}),
    productsSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number
}),
    categoriesSchema = new mongoose.Schema({
    name: String
});

// MONGOOSE MODELS
var Users       = mongoose.model("Users", userSchema),
    Products    = mongoose.model("Products", productsSchema),
    Categories  = mongoose.model("Categories", categoriesSchema);

Products.create();

// SERVE FOLDERS
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// ASSUME EJS FILE EXTENSION
app.set("view engine", "ejs");

// ROUTES
app.get("/", function (req, res) {
    res.render("home");
});

// FEATURED PRODUCT
app.get("/featuredProduct", function (req, res) {
    res.render("featuredProduct");
});

// PRODUCTS
app.get("/products", function (req, res) {
    Products.find({}, function(err, products){
        if(err) {
            console.log(err);
        } else {
            res.render("products", {products: products});
        }
    });
});

app.post("/products", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var newProduct = {name: name, image: image, price: price};
    Products.create(newProduct, function(err, product){
        if (err) {
            console.log(err);            
        } else {
            console.log(product);
        }
    })
    res.render("products");
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
    var user = req.body.userField;
    var password = req.body.passwordField;
    res.render("home");
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
        Users.create(newUser, function(err, user){
            if(err){
                console.log(err);
            } else {
                res.redirect("login");
            }
        });
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
