import mongoose from "mongoose";
import { DBNAME, DATBASE_URL } from "./env.js";

const URL = DATBASE_URL + "/" + DBNAME;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

export const connection = () => {
	try {
		mongoose.connect(URL, options, (err) => {
			if (err) {
				console.log(err.message);
			} else {
				mongoose.connection.on("connected", () => {});
				mongoose.connection.on("error", (err) =>
					console.log("error:", err.message)
				);
				mongoose.connection.on("disconnected", () =>
					console.log("disconnected")
				);
				console.log("** Database Connected **");
			}
		});
	} catch (error) {
		console.log("sdasd" + error.stack);
	}
};
