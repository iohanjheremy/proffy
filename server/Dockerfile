# Etapa única para desenvolvimento
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

# Instala ts-node-dev globalmente
RUN npm install -g ts-node-dev

COPY . .

EXPOSE 3333

CMD ["ts-node-dev", "--transpile-only", "--ignore-watch", "node_modules", "--respawn", "src/server.ts"]
