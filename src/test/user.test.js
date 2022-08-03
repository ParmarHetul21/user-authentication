import request from "supertest";
import StatusCodes from "../common/statuscode.common.js";
import app from "../server.js";

describe("POST /user/register", function () {
	it("create new user", function () {
		return request(app)
			.post("/user/register")
			.set("Content-Type", "multipart/form-data")
			.field({
				fullName: "John Doe",
				email: "john23@doe.com",
				gender: "male",
				joinDate: "22-08-2022",
				password: "John@1243#"
			})
			.attach("userImage", "/home/globalvox/Downloads/book1.jpg")
			.expect(StatusCodes.OK);
	});

	it("user already exits", function () {
		return request(app)
			.post("/user/register")
			.set("Content-Type", "nultipart/form-data")
			.field({
				fullName: "John Doe",
				email: "john231@doe.com",
				gender: "male",
				joinDate: "22-08-2022",
				password: "John@1243#"
			})
			.attach("userImage", "/home/globalvox/Downloads/book1.jpg")
			.expect(StatusCodes.CONFLICT);
	});

	it("check image not uploaded", function () {
		return request(app)
			.post("/user/register")
			.set("Content-Type", "multipart/form-data")
			.field({
				fullName: "John Doe",
				email: "john25@doe.com",
				gender: "male",
				joinDate: "22-08-2022",
				password: "John@1243#"
			})
			.expect(StatusCodes.BAD_REQUEST);
	});
});
