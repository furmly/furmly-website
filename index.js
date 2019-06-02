const express = require("express");
const compression = require("compression");
const app = express();
app.use(compression({ threshold: 0, filter: () => true, level: 9 }));
app.set("view engine", "ejs");
app.set("views", "./pages");

app.get("/", (req, res) => {
  res.render("index", {
    landing: {
      title: "Configure your UI",
      heroImg1: "./images/2.gif",
      heroImg2: "./images/1.gif",
      subtitle: "The more you look the less you see",
      keyFeatures: [
        {
          title: "Dynamic content",
          content: "fantastic stuff bro",
          icon: "fa-apple-pay"
        }
      ],
      otherFeatures: []
    }
  });
});
app.use(express.static("public"));

const port = process.env.PORT || 8228;
app.listen(port, () => console.log(`started on ${port}`));
