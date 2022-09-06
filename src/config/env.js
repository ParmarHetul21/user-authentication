import "dotenv/config";

const REPORT = 4000;
export const DATBASE_URL = process.env.DATABASE_URL;
export const PORT = process.env.PORT || REPORT;
export const DBNAME = process.env.DBNAME;
export const ENC_KEY = process.env.ENC_CRYPT;
export const JWT_KEY = process.env.JWT;
export const USERNAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;
export const LOG_DIR = process.env.LOG_DIR;
