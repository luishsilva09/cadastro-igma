import { Router } from "express";
import userService from "../services/userService";

class UserController {
  router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.get("/users", userService.index);
  }
}

export default new UserController();
