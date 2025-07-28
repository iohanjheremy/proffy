
# 🎓 Proffy – Plataforma de Aulas Online

O **Proffy** é uma aplicação fullstack construída para conectar alunos e professores de forma simples, com funcionalidades de cadastro, busca e agendamento de aulas.

Desenvolvido com foco em aprendizado durante a **Next Level Week #2** da [Rocketseat](https://rocketseat.com.br), o projeto foi expandido com suporte a **Docker** para desenvolvimento moderno e modular.

---

## 🚀 Tecnologias Utilizadas

### Backend:
- Node.js
- TypeScript
- Express
- SQLite + Knex
- ts-node-dev

### Frontend:
- React.js (Create React App)
- React Router DOM
- Axios

### Outros:
- Docker + Docker Compose
- ESLint + TypeScript + Hot Reload

---
```

## 📦 Estrutura do Projeto

```bash
proffy/
├── server/           # Backend Node + Express + TypeScript
│   ├── src/          # Código-fonte (controllers, routes, DB)
│   ├── knexfile.ts   # Configuração do banco com Knex
│   └── Dockerfile
│
├── web/              # Frontend React
│   ├── src/          # Componentes, páginas, estilos
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md

```

---

## ⚙️ Como Executar (com Docker)

### 🔁 Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### ▶️ Passo a Passo

1. Clone o projeto:

```bash
git clone https://github.com/iohanjheremy/proffy.git
cd proffy
````

2. Suba os containers com:

```bash
docker compose up --build
```

3. Acesse em:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend (API): [http://localhost:3333](http://localhost:3333)

> ⚠️ Certifique-se de que as chamadas `axios` no frontend apontam para `http://localhost:3333`.

---

## 👨‍🏫 Funcionalidades

* Cadastro de professores, matérias e horários disponíveis
* Busca de professores por filtro: matéria, dia da semana e horário
* Registro de conexões (aluno → professor)

---

## 📂 Variáveis de Ambiente

Atualmente não é obrigatório `.env`, mas você pode adicionar suporte com:

### Exemplo de `.env` para o backend:

```env
PORT=3333
DATABASE_URL=./src/database/database.sqlite
```

---

## 🐳 Docker – Notas Técnicas

### Volumes e Hot Reload

* Os volumes estão configurados em `docker-compose.yml` para permitir edição ao vivo (hot reload).
* Cada serviço ignora `node_modules` com volumes nomeados para evitar conflitos.

### Scripts importantes

**Backend (`server/package.json`):**

```json
"scripts": {
  "start": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts",
  "build": "tsc",
  "knex:migrate": "knex --knexfile knexfile.ts migrate:latest"
}
```

**Frontend (`web/package.json`):**

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}
```

---


### Web

![Web](https://raw.githubusercontent.com/iohanjheremy/proffy/main/.github/proffy-web.png)

---

## 🧠 Créditos

Projeto baseado na **NLW #2** da Rocketseat, com adaptações e melhorias por [@iohanjheremy](https://github.com/iohanjheremy).

---


