const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

const app = express();
const errorController = require("./controllers/error");
const db = require("./util/database");

app.set("view engine", "ejs");
app.set("views", "views");

const routeDir = require("./helpers/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

db.execute("SELECT * FROM products")
    .then(() => {})
    .catch((err) => {
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
