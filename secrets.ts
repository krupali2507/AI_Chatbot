import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
export const DB_NAME = process.env.DB_NAME;
