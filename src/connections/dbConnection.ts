import mongoose from "mongoose";
import { DB_CONNECTION_STRING, DB_NAME } from "../../secrets";

const newURI = `${DB_CONNECTION_STRING}${DB_NAME}`;
console.log("newURI:::", newURI);
export const dbConnection = async () => {
  try {
    return mongoose.connect(newURI);
  } catch (error) {
    console.log("error:::", error);
    return error;
  }
};
