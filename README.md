# 📦 CallingBox API

API RESTful desenvolvida com **Node.js**, **TypeScript** e **MySQL**, estruturada no padrão **MVC**, com suporte a validação de dados, variáveis de ambiente e uma arquitetura escalável.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [express-validator](https://express-validator.github.io/)
- [mysql2](https://www.npmjs.com/package/mysql2)

---

## 📁 Estrutura do Projeto

```
📦 callingbox/
├── 📂 src/
│   ├── 📂 controllers/
│   ├── 📂 models/
│   ├── 📂 routes/
│   ├── 📂 validations/
│   ├── 📄 server.ts
├── 📄 .env
├── 📄 dump.sql
├── 📄 package.json
├── 📄 tsconfig.json
```

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/ruanbarrosodev/callingbox.git

# Acesse o diretório
cd callingbox

# Instale as dependências
npm install
```

---

## 🧪 Configuração do Banco de Dados

1. **Crie um banco de dados MySQL.**

2. **Importe o arquivo `dump.sql`** (na raiz do projeto) no seu banco de dados:

```sql
-- via terminal MySQL
mysql -u seu_usuario -p nome_do_banco < dump.sql
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=callingbox
PORT=4000
```

---

## ▶️ Executando o Projeto

```bash
# Inicie o servidor em modo desenvolvimento
npm run dev
```

A API será executada em: `http://localhost:4000`

---

## 📬 Endpoints Disponíveis

| Método | Rota            | Descrição                     |
|--------|------------------|-------------------------------|
| GET    | `/calling`       | Listar todos os chamados      |
| GET    | `/calling/:id`   | Buscar chamado por ID         |
| POST   | `/calling`       | Criar novo chamado            |
| PUT    | `/calling/:id`   | Atualizar chamado por ID      |

---

## ✅ Validação

A API utiliza o `express-validator` para garantir que os dados obrigatórios sejam fornecidos corretamente em requisições `POST` e `PUT`.

---

## 📌 Observações

- O projeto segue padrão **MVC** (Model-View-Controller) para facilitar escalabilidade e manutenção.
- O uso de variáveis `.env` permite fácil configuração para múltiplos ambientes (dev, prod, etc).
- O arquivo `dump.sql` já contém a estrutura da tabela `calling`.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

## 🧑‍💻 Autor

Feito com 💻 por [Ruan Barroso](https://github.com/ruanbarrosodev)

---

## 📝 Licença

Este projeto está sob a licença MIT.
