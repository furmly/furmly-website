const express = require("express");
const compression = require("compression");
const app = express();
const furmlyStudio =
  "<a class='tlink' href='https://github.com/furmly/furmly-studio' target='_blank'><b>furmly-studio</b></a>";
app.use(compression({ threshold: 0, filter: () => true, level: 9 }));
app.set("view engine", "ejs");
app.set("views", "./pages");

app.get("/", (req, res) => {
  res.render("index", {
    landing: {
      title: "Configure forms with React and React Native",
      heroImg1: "./images/2.gif",
      heroImg2: "./images/1.gif",
      githubLink: "https://github.com/furmly",
      subtitle: "Build truly dynamic forms across multiple platforms",
      keyFeatures: [
        {
          title: "Step 1",
          content: `Define your processes with steps and elements using ${furmlyStudio}`,
          icon: "fas fa-dice-one",
          bottomIcon: "fas fa-cubes"
        },
        {
          title: "Step 2",
          content:
            "Implement your design for web and mobile leveraging on <a class='tlink' href='https://github.com/furmly/furmly-client' target='_blank'><b>furmly-client</b></a>",
          icon: "fas fa-dice-two",
          bottomIcon: "fab fa-react"
        },
        {
          title: "Step 3",
          content: "Modify your configuration as business requirements change",
          icon: "fas fa-dice-three",
          bottomIcon: "fas fa-sync-alt"
        }
      ],
      otherFeatures: [
        {
          title:
            "<i class='fas fa-database'></i> Define entities for persistence",
          content:
            "For example when building an application for taxi companies we may need to create an entity 'taxi' which contains all the properties of a taxi.",
          img: "./images/2.png"
        },
        {
          title:
            "<i class='fas fa-file-code'></i> Implement business logic along with configuration",
          content:
            "Business logic can be written side to side with your forms. Code editor includes basic JavaScript intellisense.",
          img: "./images/4.png"
        },
        {
          title:
            "<i class='fas fa-file-export'></i>Export entire processes to json",
          content: `Use ${furmlyStudio} to export entire processes to json.`,
          img: "./images/5.png"
        }
      ]
    }
  });
});
app.use(express.static("public"));

const port = process.env.PORT || 8228;
app.listen(port, () => console.log(`started on ${port}`));
