import "dotenv/config";

const replacementPort = 4000;
export const jwt = process.env.JWT;
export const DATBASE_URL = process.env.DATABASE_URL;
export const PORT = process.env.PORT || replacementPort;
export const DBNAME = process.env.DBNAME;
export const ENC_KEY = process.env.ENC_CRYPT;
