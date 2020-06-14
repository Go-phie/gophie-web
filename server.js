const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const filePath = path.resolve(__dirname, "./build", "index.html");

app.get("/", function (request, response) {
  console.log("Home page Visited");
  let result = null;
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    // edit links for link preview
    data = data.replace(/\$OG_TITLE/g, "Gophie");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Search, stream and download movies, series and anime without bumping into a single ad on your favourite movie aggregator site"
    );
    result = data.replace(
      /\$OG_IMAGE/g,
      "https://res.cloudinary.com/silva/image/upload/v1587376155/goophie-meta-banner.png"
    );
    response.send(result);
  });
});

app.get("/terms", function (request, response) {
  console.log("Terms and condition page Visited");
  let result = null;
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    // edit links for link preview
    data = data.replace(/\$OG_TITLE/g, "Gophie");
    data = data.replace(/\$OG_DESCRIPTION/g, "Terms and Conditions of Usage");
    result = data.replace(
      /\$OG_IMAGE/g,
      "https://res.cloudinary.com/silva/image/upload/v1587376155/goophie-meta-banner.png"
    );
    response.send(result);
  });
});

app.get("/shared/:referralID", function (request, response) {
  console.log("Shared page visited");
  const referralID = request.params.referralID;
  let result = null;
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    axios
      .post(
        `https://gophie-ocena.herokuapp.com/referral/id/?referral_id=${referralID}`
      )
      .then(function (response) {
        let movie_name = response.data.name;
        let description = response.data.description;
        let image = response.data.cover_photo_link;
        data = data.replace(/\$OG_TITLE/g, `Gophie - ${movie_name}`);
        if (description.length <= 1) {
          description = "Could not find movie description";
        }
        if (image.length <= 1) {
          image =
            "https://res.cloudinary.com/silva/image/upload/v1587376155/goophie-meta-banner.png";
        }
        data = data.replace(/\$OG_DESCRIPTION/g, description);
        result = data.replace(/\$OG_IMAGE/g, image);
      })
      .catch(function (error) {
        console.log(error);
      });
    response.send(result);
  });
});

app.get("/:engine", function (request, response) {
  const engine = request.params.engine;
  console.log(`${engine} page Visited`);
  let result,
    description = null;

  switch (engine) {
    case "Zeta":
      description =
        "Download TV series for free with a simple click of the button";
      break;
    case "Iota":
      description =
        "Download Hollywood, Bollywood HD Movies with a simple click of the button";
      break;
    default:
      description = "Download Movies with a simple click of the button";
      break;
  }
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    // edit links for link preview
    data = data.replace(/\$OG_TITLE/g, `Gophie - ${engine}`);
    data = data.replace(/\$OG_DESCRIPTION/g, description);
    result = data.replace(
      /\$OG_IMAGE/g,
      "https://res.cloudinary.com/silva/image/upload/v1587376155/goophie-meta-banner.png"
    );
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (request, response) {
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
