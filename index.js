const express = require("express");
const compression = require("compression");
const app = express();
app.use(compression({ threshold: 0, filter: () => true, level: 9 }));
app.set("view engine", "ejs");
app.set("views", "./pages");

app.get("/", (req, res) => {
  res.render("index");
});
app.use(express.static("public"));

app.listen(process.env.PORT || 8228);
