import mongoose from "mongoose";
import { DBNAME, DATBASE_URL } from "./env.js";

const URL = DATBASE_URL + "/" + DBNAME;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

mongoose.connect(URL, options, (err) => {
	if (err) {
		console.log(err.stack);
	} else {
		mongoose.connection.on("connected", () => {});
		mongoose.connection.on("error", (err) => console.log("error:", err));
		mongoose.connection.on("disconnected", () =>
			console.log("disconnected")
		);
		console.log("** Database Connected **");
	}
});
