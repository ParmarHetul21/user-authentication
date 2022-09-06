import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { userRouter } from "./users/index.js";
import { PORT } from "./config/env.js";
import { serve, setup } from "swagger-ui-express";
import { connection } from "./config/db.js";
import StatusCodes from "./common/statuscode.common.js";
import fs from "fs";
import morgan from "morgan";
import helmet from "helmet";
import logger from "./config/logger.js";
import statusMessages from "./common/statustext.common.js";
import Response from "./common/response.common.js";

const app = express();

const swaggerDoc = JSON.parse(fs.readFileSync("./openapi.json", "utf8"));

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(
	"/docs",
	serve,
	setup(swaggerDoc, {
		swaggerOptions: { filter: "", persistAuthorization: true },
		customSiteTitle: "User Authentication Swagger",
		explorer: true
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

app.use((_req, res) => {
	res.status(StatusCodes.NOT_FOUND).send({
		message: statusMessages.NOT_FOUND
	});
});

app.use((err, res) => {
	logger.error(err.stack);
	const { statusCode, response } = Response.createResponse(
		StatusCodes.INTERNAL_SERVER_ERROR,
		err
	);
	res.status(statusCode).json(response);
});

const server = app.listen(PORT, () => {
	console.log("listening on localhost:3300");
	connection();
});

process.on("uncaughtException", (err) => {
	if (err instanceof Error) logger.error(err.stack);
	server.close(() => {
		console.log("Stopped server due to uncaughtException");
		console.log(err);
	});
});

process.on("SIGTERM", () => {
	console.log("SIGTERM signal recieved, Stopping server");
	server.close(() => {
		console.log("Stopped server");
	});
});

export default app;
