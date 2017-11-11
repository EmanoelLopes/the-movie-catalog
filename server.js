const express = require('express');
const path = require("path");
const compression = require("compression");
const app = express();

const forceSSL = function() {
  return function(req, res, next) {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(["https://", req.get("Host"), req.url].join(""));
    }
    next();
  };
};

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(compression());
app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);
