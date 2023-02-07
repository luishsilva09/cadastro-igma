  public async findByCpf(req: Request, res: Response): Promise<Response> {
    const formatCpf: string = req.params.cpf.replace(/\D/g, "");

    if (!(await UserService.existUser(formatCpf))) {
      return res.status(404).send("Não encontrado");
    } else {
      const result = await prisma.user.findUnique({
        where: { cpf: formatCpf },
      });
      return res.json(result);
    }
  }

  static validCpf(cpf: string) {
    // cpf invalidos conhecidos
    const invalidCpfs = [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
    ];
    //verifica invalido conhecidos
    if (invalidCpfs.includes(cpf)) return false;
    //tamanho do cpf
    if (cpf.length != 11) return false;

    let soma1 = 0;
    let soma2 = 0;
    let cont = 2;
    let dig1 = 0;
    let dig2 = 0;

    //Descrobrir primeiro digito
    for (let i = 8; i >= 0; i--) {
      let res = Number(cpf[i]) * cont;
      soma1 += res;
      cont++;
    }
    if (soma1 % 11 >= 2) dig1 = 11 - (soma1 % 11);

    //reinicia contador
    cont = 2;
    //Descobri segundo digito
    for (let i = 9; i >= 0; i--) {
      let res = Number(cpf[i]) * cont;
      soma2 += res;
      cont++;
    }
    if (soma2 % 11 >= 2) dig2 = 11 - (soma2 % 11);

    //verifia se os digitos sao iguais
    if (String(dig1) + String(dig2) === cpf[9] + cpf[10]) {
      return true;
    } else {
      return false;
    }
  }

  static async existUser(cpf: string) {
    const result = await prisma.user.findUnique({
      where: { cpf: cpf },
    });
    if (result === null) return false;
    return true;
  }
