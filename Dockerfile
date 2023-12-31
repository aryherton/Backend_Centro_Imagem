# Use a imagem Node.js com a versão especificada em .nvmrc
FROM node:18.17.0

WORKDIR /app

# Copie o arquivo package*.json para o contêiner
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003

CMD ["npm", "run", "start:prod"]
