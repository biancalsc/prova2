import { Router, Request, Response } from "express";
import controller from "../controllers/WordController";

const routes = Router();

routes.get("/list", controller.list);
routes.get("/create/:name", controller.create);
routes.get("/remove/:id", controller.remove);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;