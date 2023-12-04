import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Word } from "../entities/Word";

class WordController {
  async create(req: Request, res: Response) {
    const { name } = req.params;
    const register = await AppDataSource.manager.save(Word, { name });
    res.send(register);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const { affected: count } = await AppDataSource.manager.delete(Word, {
      id,
    });
    return res.json({ count });
  }

  async list(_: Request, res: Response): Promise<Response> {
    const response = await AppDataSource.manager.find(Word);
    const words = response.map((item) => {
      return { id: item.id, chars: item.name.split("") };
    });
    return res.json(words);
  }
}

export default new WordController();
