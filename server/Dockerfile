# Etapa de build
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build opcional (caso use TypeScript)
RUN npm run start

# Etapa final
FROM node:18

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3333

CMD ["npm", "run", "start"]
