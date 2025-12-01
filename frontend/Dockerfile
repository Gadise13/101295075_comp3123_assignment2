<<<<<<< HEAD
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
=======

FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install


FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
>>>>>>> 26bc769935998ff38e243144c7075a6b09b1d7a2
