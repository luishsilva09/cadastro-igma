import User from "../interfaces/user";
import userRepository from "../repository/userRepository";

class UserService {
  public async create(userData: User) {
    //formatando cpf
    const formatCpf: string = userData.cpf.replace(/\D/g, "");

    //validando se já existe cadastro
    if (await this.existUser(formatCpf)) {
      return { status: 422, send: "invalido" };
    }

    //validando cpf
    if (!this.validCpf(formatCpf)) {
      return { status: 422, send: "CPF invalido" };
    } else {
      //cadastro do usuario
      await userRepository.create({ ...userData, cpf: formatCpf });

      return { status: 201, send: "OK" };
    }
  }

  public async findAll(page: Number, size: Number) {
    const _page = Number(page) || 1;
    const _size = Number(size) || 5;

    const result = await userRepository.findAll(_page, _size);

    return { status: 200, send: result };
  }

  public async findByCpf(cpf: string) {
    const formatCpf: string = cpf.replace(/\D/g, "");

    if (!(await this.existUser(formatCpf))) {
      return { status: 404, send: "Não encontrado" };
    } else {
      const result = await userRepository.findByCpf(formatCpf);

      return { status: 200, send: result };
    }
  }

  private validCpf(cpf: string) {
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

    let soma_1 = 0;
    let soma_2 = 0;
    let cont = 2;
    let dig_1 = 0;
    let dig_2 = 0;

    //Descrobrir primeiro digito
    for (let i = 8; i >= 0; i--) {
      let res = Number(cpf[i]) * cont;
      soma_1 += res;
      cont++;
    }
    if (soma_1 % 11 >= 2) dig_1 = 11 - (soma_1 % 11);

    //reinicia contador
    cont = 2;
    //Descobri segundo digito
    for (let i = 9; i >= 0; i--) {
      let res = Number(cpf[i]) * cont;
      soma_2 += res;
      cont++;
    }
    if (soma_2 % 11 >= 2) dig_2 = 11 - (soma_2 % 11);

    //verifia se os digitos sao iguais
    if (String(dig_1) + String(dig_2) === cpf[9] + cpf[10]) {
      return true;
    } else {
      return false;
    }
  }

  private async existUser(cpf: string) {
    const result = await userRepository.findByCpf(cpf);
    if (result === null) return false;
    return true;
  }
}

export default new UserService();
