  static async existUser(cpf: string) {
    const result = await prisma.user.findUnique({
      where: { cpf: cpf },
    });
    if (result === null) return false;
    return true;
  }
