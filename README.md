# 🚀 Ponto Eletrônico API

## 📖 Descrição

Este projeto é uma **API para gerenciamento de ponto eletrônico**, desenvolvida utilizando **NestJS**. Ele permite que os usuários registrem suas entradas e saídas de trabalho, além de gerenciar **usuários**, **empresas** e **administradores**. A API também fornece uma documentação interativa via **Swagger** para facilitar a integração com outros sistemas e o uso por desenvolvedores.

## 🛠️ Tecnologias Empregadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **NestJS**: Framework Node.js baseado em TypeScript para a criação de aplicações escaláveis 🏗️.
- **TypeScript**: Superset do JavaScript, trazendo tipagem estática ao código 💻.
- **MySQL**: Banco de dados relacional para armazenar as informações de usuários, empresas e registros de ponto 💾.
- **Swagger**: Interface de documentação interativa da API 🌐.
- **Bcrypt**: Biblioteca para hash de senhas, garantindo a segurança das credenciais 🔒.
- **@nestjs/config**: Módulo do NestJS para gerenciamento de variáveis de ambiente 🛠️.
- **@nestjs/typeorm**: Integração entre o NestJS e o TypeORM para comunicação com o banco de dados MySQL ⚙️.

## ⚙️ Requisitos para Rodar o Projeto

### 🔥 Pré-requisitos

Antes de começar, verifique se você tem as seguintes dependências instaladas no seu ambiente:

- **Node.js** (versão 14 ou superior) 🔥
- **MySQL** (versão 5.7 ou superior) 🐬
- **NPM** ou **Yarn** (gerenciadores de pacotes) 📦

### 📝 Passos para Rodar o Projeto

1. **Clone o repositório**:

   Se você ainda não clonou o repositório, execute o seguinte comando no terminal:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd ponto-eletronico
   ```

2. **Instale as dependências**:

   Instale as dependências do projeto com o seguinte comando:

   ```bash
   npm install
   ```

   Ou, se estiver usando o **Yarn**:

   ```bash
   yarn install
   ```

3. **Configure o Banco de Dados (MySQL)**:

   Certifique-se de que o **MySQL** esteja rodando. Crie o banco de dados com o nome `ponto_eletronico`:

   ```sql
   CREATE DATABASE ponto_eletronico;
   ```

4. **Configure o arquivo `.env`**:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

   ```plaintext
   APP_PORT=3000
   BASE_URL=http://localhost
   SWAGGER_URL=http://localhost:3000/api
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=
   DB_DATABASE=ponto_eletronico
   NODE_ENV=development
   ```

   **Dica**: Altere os valores conforme necessário, especialmente a senha do banco de dados.

5. **Execute as Migrations**:

   Caso esteja utilizando migrations para criação das tabelas no banco de dados, execute:

   ```bash
   npm run migration:run
   ```

6. **Inicie o Servidor**:

   Após configurar tudo, inicie o servidor com o comando:

   ```bash
   npm run start
   ```

   O servidor estará rodando em `http://localhost:3000`, e você também pode acessar a documentação Swagger em `http://localhost:3000/api`.

### 🌍 Variáveis de Ambiente

- **APP_PORT**: Porta em que a aplicação será executada 🔌.
- **BASE_URL**: URL base da aplicação 🌐.
- **SWAGGER_URL**: URL onde o Swagger pode ser acessado 📑.
- **DB_HOST**: Host do banco de dados MySQL 🏠.
- **DB_PORT**: Porta do banco de dados MySQL 🔐.
- **DB_USERNAME**: Nome de usuário do banco de dados MySQL 🧑‍💻.
- **DB_PASSWORD**: Senha do banco de dados MySQL 🔑.
- **DB_DATABASE**: Nome do banco de dados MySQL 📊.
- **NODE_ENV**: Ambiente de execução (ex: `development`, `production`) 🌱.

---

## 🖥️ Endpoints

### Swagger

A API oferece documentação interativa através do **Swagger**. Você pode acessá-la em:

```
http://localhost:3000/api
```

### Exemplos de Endpoints

- **POST /users** - Cria um novo usuário ✍️.
- **GET /users** - Lista todos os usuários 📋.
- **POST /companies** - Cria uma nova empresa 🏢.
- **GET /companies** - Lista todas as empresas 💼.
- **POST /attendance** - Registra um ponto de entrada ou saída ⏱️.

---

## 🤝 Contribuindo

Se você deseja contribuir com melhorias ou correções para este projeto, siga estas etapas:

1. **Fork** este repositório.
2. Crie uma **branch** para sua alteração (`git checkout -b minha-alteracao`).
3. Faça as alterações e **commit** com uma mensagem clara (`git commit -am 'Descrição da mudança'`).
4. Envie para o repositório remoto (`git push origin minha-alteracao`).
5. Abra um **Pull Request** para revisão.

---

## 📜 Licença

Este projeto está licenciado sob a Licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.