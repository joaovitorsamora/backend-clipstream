# 🎬 Backend ClipStream

## 📖 Sobre o Projeto

O **Backend ClipStream** é uma API desenvolvida em Node.js para gerenciamento de vídeos e artigos, permitindo operações de CRUD, contagem de visualizações, likes, dislikes e comentários. O projeto foi pensado para servir como backend de uma plataforma de streaming de vídeos e leitura de artigos, com integração a banco de dados PostgreSQL hospedado na Neon.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Node.js** & **Express**: Estrutura principal da API.
- **Sequelize**: ORM para integração com banco de dados relacional.
- **PostgreSQL**: Banco de dados relacional utilizado.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Vercel**: Deploy serverless da aplicação.
- **body-parser** & **cors**: Middleware para requisições HTTP.

---

## ✨ Alterações Realizadas

- Criação de models e controllers para vídeos e artigos.
- Implementação de rotas RESTful para CRUD de vídeos e artigos.
- Adição do campo `views` para artigos, com rota para incrementar visualizações.
- Suporte a comentários, likes e dislikes em vídeos.
- Estruturação do projeto para deploy serverless na Vercel.
- Configuração de variáveis de ambiente para conexão segura ao banco de dados.

---

## 📁 Estrutura do Projeto

```text
.
├── .env
├── .gitignore
├── .sequelizerc
├── package.json
├── vercel.json
├── seeders/
├── src/
│   ├── index.js
│   ├── router.js
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── ArtigosControllers.js
│   │   └── VideosControllers.js
│   ├── database/
│   │   ├── index.js
│   │   └── migrations/
│   │       ├── 20240718091441-add-videos-table.js
│   │       ├── 20241106155942-artigos.js
│   │       └── 20241123190023-add-views-field.js
│   └── models/
│       ├── Artigo.js
│       ├── index.js
│       └── Video.js
```

---

## 🚀 Como Utilizar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/joaovitorsamora/backend-clipStream.git
   cd backend-clipStream
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Renomeie o arquivo `.env.example` para `.env` e preencha com suas credenciais do banco de dados PostgreSQL.

4. **Execute as migrations:**
   ```sh
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor em modo desenvolvimento:**
   ```sh
   npm run dev
   ```

6. **Acesse a API:**
   - O servidor estará disponível em `http://localhost:4000`

---

## 📬 Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias!

---

## 📝 Licença

Este projeto está sob a licença ISC.
