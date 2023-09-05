# Use a imagem Node.js com a versão especificada em .nvmrc
FROM node:18.17.0

WORKDIR /app

# Copie o arquivo package*.json e o arquivo .env para o contêiner
COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003

# Defina a variável de ambiente MONGO_URI no contêiner
ENV MONGO_URI=${MONGO_URI}

CMD ["npm", "run", "start:prod"]
