import multer from "multer";

const FILE_SIZE = 25000000;
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "src/upload/");
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname);
	}
});

const fileFilter = (_req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

export const upload = multer({
	storage: storage,
	limits: {
		fileSize: FILE_SIZE
	},
	fileFilter: fileFilter
});
