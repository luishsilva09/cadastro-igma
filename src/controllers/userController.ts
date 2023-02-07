import { Router } from "express";
import userService from "../services/userService";

class UserController {
  router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/users", userService.create);
    this.router.get("/users/:cpf", userService.findByCpf);
    this.router.get("/allUsers", userService.findAll);
  }
}

export default new UserController();
