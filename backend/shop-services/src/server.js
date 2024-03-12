import express from "express";
import bodyParser from "body-parser";

const connectdb = require("./config/connectMONGODB");
const initRouter = require("./router/routers");

let app = express();
let port = process.env.PORT || 8088;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

initRouter(app);
connectdb();
app.listen(port, async () => {
  console.log(`Back End runging on port: localhost:${port}`);
});
