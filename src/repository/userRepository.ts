import { prisma } from "../dbStrategy/database";

class UserRepository {
  public async create(userData: {
    name: string;
    cpf: string;
    birthDate: string;
  }) {
    await prisma.user.create({
      data: { ...userData },
    });
  }
  public async findByCpf(cpf: string) {
    return await prisma.user.findUnique({
      where: { cpf: cpf },
    });
  }
  public async findAll(page: number, size: number) {
    return await prisma.user.findMany({
      take: size,
      skip: (page - 1) * size,
    });
  }
}

export default new UserRepository();
