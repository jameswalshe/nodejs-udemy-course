const fs = require("fs");

const handleRequest = (req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>This is the index page</h1>");
    res.write(
      "<form action='submit-data' method='POST'><input type='text' name='submit-data'><button type='submit'>Enter Data</button></form></body>"
    );
    res.write("</html>");
    res.end();
  } else if (url === "/submit-data" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const data = Buffer.concat(body).toString();
      console.log(data.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
};

module.exports = handleRequest;
