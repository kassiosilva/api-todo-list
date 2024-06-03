# API Minhas Tarefas

> Esse backend traz todas as principais funcionalidades de uma lista de tarefas, além de persistir as tarefas em um banco de dados. Essa API foi desenvolvida com o intuito de colocar em prática todos os conceitos aprendidos na disciplina de desenv plataformas web.

Foi desenvolvido também o **front end Minhas listas**. Se quiser olhar como ficou [clique aqui](https://github.com/kassiosilva/todolist-frontend).

## ⚙️ Funcionalidades

- Criação de usuários (`[POST] /register`)
- Autenticação de usuários via JWT (`[POST] login`)
- Listagem de tarefas (`[GET] /tasks`)
- Criação de tarefas (`[POST] /task`)
- Remoção de tarefas (`[DELETE] /task/:id`)
- Atualização de tarefas (`[PUT] /task/:id`)

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do backend:

- Node.js (v20.14.0)
- Express
- MongoDB Atlas
- Mongoose

## 🚀 Como executar o projeto

> Antes de tudo tenha certeza que você tem o ambiente Node.js configurado na sua máquina.

Clone o projeto e depois de baixado entre na raiz do projeto e execute:

```bash
npm install
```

Logo após, defina um arquivo `.env` na raiz do projeto e copie todas as variavéis do `.env.example` e cole nele. Preencha cada uma das variáveis com seus valores correspondentes.

```
MONGODB_URI="coloque aqui sua url de conexão com o MongoDB"
PORT=3333
SECRET_KEY="minhachavesecreta"
```

Feito isso, execute o comando na raiz:
```bash
npm run dev
```

Se tudo estiver certo, o backend irá iniciar 🚀
