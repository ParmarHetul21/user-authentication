import mongoose from "mongoose";
import { DBNAME, DATBASE_URL } from "./env.js";
import logger from "./logger.js";

const URL = DATBASE_URL + "/" + DBNAME;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: DBNAME
};

export const connection = () => {
	try {
		mongoose.connect(URL, options, (err) => {
			if (err) {
				logger.error({ type: "error", message: err.message });
			} else {
				mongoose.connection.on("connected", () => {});
				mongoose.connection.on("error", (err) => {
					logger.error({ type: "error", message: err.message });
				});
				mongoose.connection.on("disconnected", () =>
					logger.log({ type: "error", message: "disconnected}" })
				);
				logger.info({
					level: "Info",
					message: "Database Connected"
				});
			}
		});

		mongoose.set("debug", (collectioName, methodName, ...methodArgs) => {
			logger.info(
				`${collectioName}.${methodName}(${methodArgs.join(", ")})`
			);
		});
	} catch (error) {
		console.log(error);
		logger.error({ type: "error", message: error.stack });
	}
};
