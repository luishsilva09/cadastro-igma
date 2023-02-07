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

# Fatures

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

To run this test, you will need to add the following environment variables to your .env.test file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:4000`

To run all test:

```bash
    npm run test
```

To run unit test:

```bash
    npm run test:unit
```

To run integration test:

```bash
    npm run test:integration
```

# Rodando no Docker

Para que não tenha nem um erro de compatibilidade da aplicação recomendo usar o docker para melhor funcionamento.

Utilize em seu .env

```bash

PORT=4000 //porta de uso da aplicação

DATABASE_URL=postgres://postgres:postgres@db:5432/cadastro-igma

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=cadastro-igma
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

Configura e cria o banco de dados:

```bash

  npx prisma migrate dev

```

Para rodar como desenvolvedor:

```bash
    npm run dev
```

# Variaveis

Para rodar esse projeto vão ser necessarias essas variaveis no .env

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:4000`

# Autor

​

- Luís Henrique da Silva

​

https://github.com/luishsilva09
