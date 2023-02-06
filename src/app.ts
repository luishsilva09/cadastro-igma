import cors from "cors";
import express, { json } from "express";
import dotenv from "dotenv";
import userController from "./controllers/userController";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    dotenv.config();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(json(), cors());
  }

  routes() {
    this.express.use(userController.router);
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log(`Server is listening on port ${port}.`);
    });
  }
}

export default new App();
