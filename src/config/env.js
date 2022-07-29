import "dotenv/config";

const REPORT = 4000;
export const DATBASE_URL = process.env.DATABASE_URL;
export const PORT = process.env.PORT || REPORT;
export const DBNAME = process.env.DBNAME;
export const ENC_KEY = process.env.ENC_CRYPT;
export const JWT_KEY = process.env.JWT;
export const username = process.env.username;
export const password = process.env.password;
