// import passport from "passport";
// import passport_jwt from "passport-jwt";
// const { ExtractJwt, Strategy } = passport_jwt;
// import { jwt } from "./env.js";
// import { User } from "../users/user.schemas.js";

// const opts = {
// 	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// 	secretOrKey: jwt
// };

// const jwtRequest = () => {
// 	passport.use(
// 		new Strategy(opts, (jwt_payload, done) => {
// 			console.log("inside the strategy");
// 		})
// 	);
// };

// export default jwtRequest;
