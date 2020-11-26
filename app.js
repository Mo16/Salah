const express = require("express")
const app = express()
const scrape = require("./models/scraper")


app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.listen(3000, function () {

});

scrape()
