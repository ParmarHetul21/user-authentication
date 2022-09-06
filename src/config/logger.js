import winston from "winston";
import DatadogWinston from "datadog-winston";
import { LOG_DIR } from "../config/env.js";

const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	defaultMeta: { service: "UserAuthentication-Service" },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({
			dirname: LOG_DIR + "/errors",
			filename: "error.log",
			level: "error"
		}),
		new winston.transports.File({
			dirname: LOG_DIR + "/combined",
			filename: "combined.log"
		}),
		new DatadogWinston({
			apiKey: "d29af25c1feffc0b981e7ea368d0fd2c",
			hostname:
				(process.env.NODE_ENV !== "production"
					? "Test"
					: "Production") + " Server",
			service: "UserAuth_API",
			ddsource: "nodejs"
		})
	]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple()
		})
	);
}

export default logger;
