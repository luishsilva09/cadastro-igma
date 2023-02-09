<h1 align="center">Cadastro igma</h1>

<div align="center">
  <h3>Construido com</h3>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" heigth="30px">
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
  
  <!--  Badges  source:  https://dev.to/envoy_/150-badges-for-github-pnk  -->
</div>

# Descrição

Uma maneira simples de armazenar dados de seus clientes com validação de CPF.

# Recursos

- Criar cliente
- validar CPF
- Buscar por CPF
- Buscar todos clientes

# API referencias

### Criar cliente:

```http
    POST /users
```

Request:

| Body        | Type     | Description                   |
| ----------- | -------- | ----------------------------- |
| `name`      | `string` | **Reuqired**. nome usuario    |
| `cpf`       | `string` | **Reuqired**. cpf             |
| `birthDate` | `string` | **Reuqired**. data nascimento |

</br>

### Buscar por CPF:

```http
    GET /users/:cpf
```

Request:

| Params | Type     | Description               |
| ------ | -------- | ------------------------- |
| `cpf`  | `string` | **Reuqired**. cpf usuario |

Response:

```json
{
  "name": "luis",
  "cpf": "42704569819",
  "birthDate": "21/2"
}
```

<br>

### Buscar todos clientes:

```http
    POST /allUsers?page=1&size=5
```

| Query  | Type     | Description             |
| ------ | -------- | ----------------------- |
| `page` | `string` | pagina de busca         |
| `size` | `string` | quantidade para retorno |

`size por padrão 5`

Response:

```json
[
  {
    "name": "luis",
    "cpf": "42704569819",
    "birthDate": "21/2"
  },
  {
    "name": "luis",
    "cpf": "42704569812",
    "birthDate": "21/2"
  }
]
```

# Testes:

Para rodar os teste use um banco semparado para não ter problemas configure seu .env.test com as seguintes variaveis.

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName-teste`

`PORT = number #recommended:4000`

Para rodar todos os testes:

```bash
    npm run test
```

# Rodando no Docker

Para que não tenha nem um erro de compatibilidade da aplicação recomendo usar o docker para melhor funcionamento.

Utilize em seu .env

```bash

PORT=4000 //porta de uso da aplicação

DATABASE_URL=postgres://postgres:postgres@db:5432/cadastro-igma

POSTGRES_USER= postgres
POSTGRES_PASSWORD= postgres
POSTGRES_DB= cadastro-igma
```

Subindo a aplicação:

```bash
  docker-compose up --build
```

# Rodar localmente

Copie o projeto:

```bash

  git clone https://github.com/luishsilva09/cadastro-igma.git

```

Instale as dependencias:

```bash

  npm install

```

Para rodar na produção:

```bash
    npm build
    npm start
```

Para rodar como desenvolvedor:

```bash
    npm run dev
```

# Variaveis

Para rodar esse projeto vão ser necessarias essas variaveis no .env

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:4000`

`POSTGRES_USER=`

`POSTGRES_PASSWORD=`

`POSTGRES_DB=`

# Autor

​

- Luís Henrique da Silva

​

https://github.com/luishsilva09
