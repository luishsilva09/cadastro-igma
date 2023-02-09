import { prisma } from "../../src/dbStrategy/database";
import supertest from "supertest";
import app from "../../src/app";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
});

afterAll(() => {
  prisma.$disconnect();
});

describe("Integretion test user service", () => {
  test("create new user", async () => {
    const userData = {
      name: "luis",
      cpf: "21447552725",
      birthDate: "21/12/2000",
    };

    const result = await supertest(app.express).post("/users").send(userData);
    const createdUser = await prisma.user.findUnique({
      where: { cpf: userData.cpf },
    });
    console.log(createdUser);

    expect(result.status).toBe(201);
    expect(createdUser).not.toBe(null);
  });
});
