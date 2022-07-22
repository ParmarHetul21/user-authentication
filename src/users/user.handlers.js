export const registerHandler = (req, res) => {
	console.log("data:- ", req.body);
	res.json({ data: "data both added" });
};
