import express from "express";
import morgan from "morgan";
import { PORT, DB_CONNECTION_STRING } from "../secrets";

const app = express();
const portNumber = PORT || 3000;

import rootRouter from "./routes";
import { dbConnection } from "./connections";

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", rootRouter);

dbConnection()
  .then(() => {
    console.log("DB connected successfully!");
    app.listen(portNumber, () => {
      console.log(`Server started on PORT ${portNumber}!`);
    });
  })
  .catch((error) => {
    console.log("Something went wrong!", error);
    process.exit(1);
  });
