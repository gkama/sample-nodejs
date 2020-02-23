const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./api/routes/apiRoutes"); //importing route

const PORT = 8080;
const HOST = "localhost";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});