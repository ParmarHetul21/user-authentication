import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import passport from "passport";
import { userRouter } from "./users/index.js";
// import jwtRequest from "./config/passport.config.js";
import { PORT } from "./config/env.js";
import { connection } from "./config/db.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
// jwtRequest();

// Module Routes
app.use("/user", userRouter);

app.listen(PORT, () => {
	console.log("listening on localhost:3300");
	connection();
});
