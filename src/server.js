import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { userRouter } from "./users/index.js";
import { PORT } from "./config/env.js";
import { serve, setup } from "swagger-ui-express";
import { connection } from "./config/db.js";
import StatusCodes from "./common/statuscode.common.js";
import fs from "fs";

const app = express();

const swaggerDoc = JSON.parse(fs.readFileSync("./openapi.json", "utf8"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(
	"/docs",
	serve,
	setup(swaggerDoc, {
		swaggerOptions: { filter: "", persistAuthorization: true },
		customSiteTitle: "User Authentication Swagger"
	})
);

// Module Routes
app.use("/user", userRouter);
app.use("/", (req, res) => {
	res.status(StatusCodes.OK).json({
		message: "Welcome to User Authentication Moudle",
		docs: "/docs"
	});
});

app.listen(PORT, () => {
	console.log("listening on localhost:3300");
	connection();
});
