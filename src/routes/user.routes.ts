import { Router } from "express";
import { userController } from "../controllers";

const userRouter: Router = Router();

userRouter.get("/healthCheck", userController.healthCheck);

export default userRouter;
