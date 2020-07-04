const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const rfs = require("rotating-file-stream");
const filePath = path.resolve(__dirname, "./build", "index.html");

// Log into separate files every day
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

// use dev mode for console logging
app.use(morgan("dev"));
// use full mode for stored logs
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version"' +
      ':status :res[content-length] :response-time ms ":referrer" ":user-agent"',
    { stream: accessLogStream }
  )
);

app.get("/", function (request, response) {
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

app.get("/shared/:referralID", function (request, response) {
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
      .then(function (json) {
        let movie_name = json.data.name;
        let description = json.data.description;
        let image = json.data.cover_photo_link;
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
        response.send(result);
      })
      .catch(function (error) {
        console.log("Could not retrieve movie details", error);
        response.redirect("/");
      });
  });
});

app.get("/terms", function (request, response) {
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

app.get("/:engine", function (request, response) {
  const engine = request.params.engine;
  let result,
    description = null;

  switch (engine) {
    case "Server2":
      description = "Download your favourite anime for free with a simple click";
      break;
    case "Server4":
      description =
        "Download TV series for free with a simple click of the button";
      break;
    case "Server3":
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
