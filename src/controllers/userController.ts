import userService from "../services/userService";
import { Request, Response } from "express";

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const result = await userService.create(req.body);
    return res.status(result.status).send(result.send);
  }

  public async findByCpf(req: Request, res: Response): Promise<Response> {
    const result = await userService.findByCpf(req.params.cpf);
    return res.status(result.status).send(result.send);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const result = await userService.findAll(
      Number(req.query.page),
      Number(req.query.size)
    );
    return res.status(result.status).send(result.send);
  }
}

export default new UserController();
