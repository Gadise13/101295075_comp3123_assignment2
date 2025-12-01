<<<<<<< HEAD
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
=======

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install
COPY src ./src
RUN mkdir -p uploads
EXPOSE 5000
CMD ["npm","start"]
>>>>>>> 26bc769935998ff38e243144c7075a6b09b1d7a2
