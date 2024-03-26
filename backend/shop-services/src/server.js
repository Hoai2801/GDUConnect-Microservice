import express from "express";
import bodyParser from "body-parser";

const connectdb = require("./config/connectMONGODB");
const initRouter = require("./router/routers");
const discovery = require('eo-discovery')

let app = express();
let port = process.env.PORT || 8087;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

initRouter(app);

connectdb();

app.listen(port, async () => {
  discovery.init({
    name : 'shop-service',           // We need a name for the service, so others can use it.
    express : app,                    // The express app is used to provide the discovery endpoints
    port : 8087,    // This is the public port for the registry, we just pass the express listener port
    eureka : {
      host : 'localhost',
      port : 8761,
      servicePath : '/eureka/apps',
    }
})
  console.log(`Back End runging on port: localhost:${port}`);
});
  