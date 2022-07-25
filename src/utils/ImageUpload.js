import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sanitizeFile = (file, cb) => {
	const fileExts = [".png", ".jpg", ".jpeg"];

	const isAllowedExt = fileExts.includes(
		path.extname(file.originalname.toLowerCase())
	);

	const isAllowedMimeType = file.mimetype.startsWith("image/");
	if (isAllowedExt && isAllowedMimeType) {
		return cb(null, true);
	}
	cb("Error: File type not allowed!");
};
const storage = multer.diskStorage({
	destination: path.join(__dirname, "../public", "uploads")
});

const uploadImage = multer({
	storage: storage,
	limit: { fileSize: 3500000 }, // 2.5mb
	fileFilter: (req, file, cb) => {
		sanitizeFile(file, cb);
	}
});

export default uploadImage;
