# Etapa de build
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa de produção
FROM node:18-alpine

WORKDIR /app

# Instala o servidor estático
RUN npm install -g serve

# Copia apenas os arquivos do build
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
