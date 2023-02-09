import userRepository from "../../src/repository/userRepository";
import userService from "../../src/services/userService";

describe("Unit test user service", () => {
  test("Create new user", async () => {
    const userData = {
      name: "luis",
      cpf: "214.475.527-25",
      birthDate: "21/12/2000",
    };

    jest.spyOn(userRepository, "create").mockImplementationOnce((): any => {});
    jest
      .spyOn(userRepository, "findByCpf")
      .mockImplementationOnce((): any => null);

    const res = await userService.create(userData);

    expect(res.status).toBe(201);
    expect(userRepository.findByCpf).toBeCalled();
    expect(userRepository.create).toBeCalled();
  });
  test("Get user by cpf", async () => {
    const userData = {
      name: "luis",
      cpf: "214.475.527-25",
      birthDate: "21/12/2000",
    };
    jest
      .spyOn(userRepository, "findByCpf")
      .mockImplementation((): any => userData);

    const res = await userService.findByCpf(userData.cpf);

    expect(res.send).not.toBe(null);
  });
  test("Get all user", async () => {
    const userData = {
      name: "luis",
      cpf: "214.475.527-25",
      birthDate: "21/12/2000",
    };
    jest
      .spyOn(userRepository, "findAll")
      .mockImplementation((): any => userData);

    const res = await userService.findAll(1, 5);

    expect(res.send).not.toBe(null);
  });
  test("Invalid cpf", async () => {
    const userData = {
      name: "luis",
      cpf: "42704569810",
      birthDate: "21/12/2000",
    };

    jest.spyOn(userRepository, "create").mockImplementationOnce((): any => {});
    jest
      .spyOn(userRepository, "findByCpf")
      .mockImplementationOnce((): any => null);

    const res = await userService.create(userData);

    expect(res.status).toBe(422);
    expect(userRepository.findByCpf).toBeCalled();
    expect(userRepository.create).toBeCalled();
  });
});
