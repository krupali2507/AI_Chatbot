import { Router } from "express";
import userRouter from "./user.routes";

const rootRouter: Router = Router();

rootRouter.use("/users", userRouter);

export default rootRouter;
