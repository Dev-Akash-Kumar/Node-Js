const http = require("http");
const fs = require("fs");

// To create server
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}\t${req.url}: New Req Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Akash Kumar");
        break;
      default:
        res.end("404");
    }
  });
});

// Entry point
myServer.listen(8000, () => {
  console.log("server started"); // call-back if our server started without problem
});
