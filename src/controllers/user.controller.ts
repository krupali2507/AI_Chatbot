import { Request, Response } from "express";

const healthCheck = (req: Request, res: Response) => {
  res.status(200).send("yes healthcheck wotking fine");
};

export default { healthCheck };
