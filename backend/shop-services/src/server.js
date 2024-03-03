import express from "express";
import bodyParser from "body-parser";

const connectdb = require("./config/connectMONGODB");
const initRouter = require("./router/routers");
// import TestRouter from "./router/apiUser";
// import RoomRouter from "./router/room";
// import ReviewRouter from "./router/review";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import bb from "express-busboy";

let app = express();
let port = process.env.PORT || 8088;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with the URL of your Next.js frontend
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true, // This is important for handling cookies, sessions, etc.
//   })
// );
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );
initRouter(app);
connectdb();
app.listen(port, async () => {
  console.log(`Back End runging on port: localhost:${port}`);
});
