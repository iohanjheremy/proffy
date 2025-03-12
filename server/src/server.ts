import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação


app.get("/", (request, response) => {
    return response.json({ message: "Hello World" });
});

app.listen(3333);