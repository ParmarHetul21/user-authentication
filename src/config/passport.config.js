import passport from "passport";
import passport_jwt from "passport-jwt";
const { ExtractJwt, Strategy } = passport_jwt;
import { jwt } from "./env.js";

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: jwt
};

const jwtRequest = () => {
	passport.use(
		new Strategy(opts, (jwt_payload, done) => {
			console.log("inside the strategy");
			console.log(jwt_payload);
		})
	);
};

export default jwtRequest;
