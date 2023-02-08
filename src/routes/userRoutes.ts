import { Router } from "express";
import userController from "../controllers/userController";

class UserRoutes {
  router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/users", userController.create);
    this.router.get("/users/:cpf", userController.findByCpf);
    this.router.get("/allUsers", userController.findAll);
  }
}

export default new UserRoutes();
