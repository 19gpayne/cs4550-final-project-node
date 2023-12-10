import express from "express";
import cors from "cors"
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
import BookRoutes from "./books/routes.js";
import CompanyRoutes from "./company/routes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/books"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
  );
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(
  session(sessionOptions)
);
  
UserRoutes(app);
BookRoutes(app);
CompanyRoutes(app);
app.listen(process.env.PORT || 4000);

